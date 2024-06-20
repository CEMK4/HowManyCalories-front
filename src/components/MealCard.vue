<script setup lang="ts">
import { Plus, X } from 'lucide-vue-next'
import { ref } from 'vue'
import Input from '@/components/ui/input/Input.vue'
import MealDropDown from './MealDropDown.vue'
import type { DateValue } from '@internationalized/date'

defineProps<{
  type: string
  value: string
  dateValue: DateValue
}>()

const isHidden = ref(true)
const chosedProduct = ref('')
const weight = ref()

const handleMealSave = () => {
  if (
    chosedProduct.value === '' ||
    weight.value === undefined ||
    weight.value === '' ||
    isNaN(weight.value)
  ) {
    return
  }
  chosedProduct.value = ''
  weight.value = undefined
  isHidden.value = true
}
</script>

<template>
  <div class="my-2">
    <div
      class="my-1 flex w-full cursor-pointer justify-between rounded-xl bg-[#353535] px-6 py-2"
      @click="
        () => {
          isHidden = !isHidden
          chosedProduct = ''
          weight = undefined
        }
      "
    >
      {{ value }}
      <span v-if="isHidden"><Plus /></span>
      <span v-else><X /></span>
    </div>
    <div v-show="!isHidden" class="flex items-center justify-between rounded-xl">
      <MealDropDown v-model:chosed-product="chosedProduct" />
      <Input placeholder="грамм" v-model="weight" class="h-8 w-[25%] text-black" />
      <Plus class="w-[10%] cursor-pointer" @click="handleMealSave" />
    </div>
  </div>
</template>
