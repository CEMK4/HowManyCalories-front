<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { useProductsStore } from '@/stores/products'
import ProductRow from './ProductRow.vue'
import { ref } from 'vue'
import { Save, Ban } from 'lucide-vue-next'
import Button from '@/components/ui/button/Button.vue'
import Input from '@/components/ui/input/Input.vue'
import { useForm } from 'vee-validate'
import { productSchema } from '@/lib/data'

const productsStore = useProductsStore()
const isAdding = ref(false)

const { errors, defineField, handleSubmit, resetForm } = useForm({
  validationSchema: productSchema
})

const [title, titleAttrs] = defineField('title')
const [calories, caloriesAttrs] = defineField('calories')
const [carbs, carbsAttrs] = defineField('carbs')
const [fats, fatsAttrs] = defineField('fats')
const [proteins, proteinsAttrs] = defineField('proteins')

const handleProductAdd = handleSubmit((values) => {
  productsStore.add(values.title, values.calories, values.proteins, values.fats, values.carbs)
  resetForm()
  isAdding.value = false
})

const handleReset = () => {
  resetForm()
  isAdding.value = false
}
</script>

<template>
  <div class="ml-auto mr-auto flex items-center justify-center py-4 text-2xl font-semibold">
    Список ваших продуктов.
  </div>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead class="w-[300px]">Название</TableHead>
        <TableHead class="w-[200px] text-center">Калории</TableHead>
        <TableHead class="w-[200px] text-center">Углеводы</TableHead>
        <TableHead class="w-[200px] text-center">Жиры</TableHead>
        <TableHead class="w-[200px] text-center">Белки</TableHead>
        <TableHead class="w-[100px] text-center">Редактировать</TableHead>
        <TableHead class="w-[100px] text-center">Удалить</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow :key="index" v-for="(product, index) in productsStore.productsList">
        <ProductRow :product :index />
      </TableRow>

      <TableRow v-if="isAdding">
        <TableCell class="text-center">
          <Input
            type="text"
            class="text-black"
            v-model="title"
            v-bind="titleAttrs"
            placeholder="Название"
          />
          <span>{{ errors.title }}</span>
        </TableCell>
        <TableCell class="text-center">
          <Input
            type="text"
            class="text-black"
            v-model="calories"
            v-bind="caloriesAttrs"
            placeholder="Калории"
          />
          <span>{{ errors.calories }}</span>
        </TableCell>
        <TableCell class="text-center">
          <Input
            type="text"
            class="text-black"
            v-model="carbs"
            v-bind="carbsAttrs"
            placeholder="Углеводы"
          />
          <span>{{ errors.carbs }}</span>
        </TableCell>
        <TableCell class="text-center">
          <Input
            type="text"
            class="text-black"
            v-model="fats"
            v-bind="fatsAttrs"
            placeholder="Жиры"
          />
          <span>{{ errors.fats }}</span>
        </TableCell>
        <TableCell class="text-center">
          <Input
            type="text"
            class="text-black"
            v-model="proteins"
            v-bind="proteinsAttrs"
            placeholder="Белки"
          />
          <span>{{ errors.proteins }}</span>
        </TableCell>
        <TableCell>
          <div class="flex justify-center">
            <Save class="cursor-pointer" @click="handleProductAdd" />
          </div>
        </TableCell>
        <TableCell>
          <div class="flex justify-center">
            <Ban @click="handleReset" class="cursor-pointer" />
          </div>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>

  <div class="ml-auto mr-auto flex items-center justify-center py-6">
    <Button @click="isAdding = true" v-show="!isAdding">Добавить</Button>
  </div>
</template>
