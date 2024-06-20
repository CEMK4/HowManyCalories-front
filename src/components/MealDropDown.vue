<script setup lang="ts">
import { ref } from 'vue'
import { Check, ChevronsUpDown } from 'lucide-vue-next'
import { useProductsStore } from '@/stores/products'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { useVModel } from '@vueuse/core'

const productsStore = useProductsStore()

const props = defineProps({ chosedProduct: String })
const emit = defineEmits(['update:chosedProduct'])
const value = useVModel(props, 'chosedProduct', emit)

const products = productsStore.productsList

const open = ref(false)
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        role="combobox"
        :aria-expanded="open"
        class="h-8 w-[60%] justify-between text-black"
      >
        {{
          value ? products.find((product) => product.title === value)?.title : 'Выбрать продукт...'
        }}
        <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-full p-0">
      <Command>
        <CommandInput class="h-9" placeholder="Найти продукт..." />
        <CommandEmpty>Не найдено продуктов.</CommandEmpty>
        <CommandList>
          <CommandGroup>
            <CommandItem
              v-for="product in products"
              :key="product.title"
              :value="product.title"
              @select="
                (ev) => {
                  if (typeof ev.detail.value === 'string') {
                    value = ev.detail.value
                  }
                  open = false
                }
              "
            >
              {{ product.title }}
              <Check
                :class="
                  cn('ml-auto h-4 w-4', value === product.title ? 'opacity-100' : 'opacity-0')
                "
              />
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>
