<script setup lang="ts">
import { TableCell } from '@/components/ui/table'
import { useProductsStore } from '@/stores/products'
import { ref } from 'vue'
import Input from '@/components/ui/input/Input.vue'
import { X, Pencil, Save, Ban } from 'lucide-vue-next'
import { useForm } from 'vee-validate'
import { productSchema } from '@/lib/data'

const productsStore = useProductsStore()

const props = defineProps(['product', 'index'])

const { errors, defineField, handleSubmit } = useForm({
  validationSchema: productSchema
})

const [title, titleAttrs] = defineField('title')
const [calories, caloriesAttrs] = defineField('calories')
const [carbs, carbsAttrs] = defineField('carbs')
const [fats, fatsAttrs] = defineField('fats')
const [proteins, proteinsAttrs] = defineField('proteins')

title.value = props.product.title
calories.value = props.product.calories
carbs.value = props.product.carbs
fats.value = props.product.fats
proteins.value = props.product.proteins

const isEditing = ref(false)

const handleProductSave = handleSubmit((values) => {
  productsStore.update(
    props.index,
    values.title,
    values.calories,
    values.proteins,
    values.fats,
    values.carbs
  )
  isEditing.value = false
})

const handleReset = () => {
  title.value = props.product.title
  calories.value = props.product.calories
  carbs.value = props.product.carbs
  fats.value = props.product.fats
  proteins.value = props.product.proteins
  isEditing.value = false
}
</script>

<template>
  <TableCell class="font-medium">
    <span v-if="!isEditing">{{ product.title }}</span>
    <span v-else>
      <Input
        type="text"
        class="text-black"
        v-model="title"
        v-bind="titleAttrs"
        placeholder="Название"
      />
      <span>{{ errors.title }}</span>
    </span>
  </TableCell>
  <TableCell class="text-center">
    <span v-if="!isEditing">{{ product.calories }}</span>
    <span v-else>
      <Input
        type="text"
        class="text-black"
        v-model="calories"
        v-bind="caloriesAttrs"
        placeholder="Калории"
      />
      <span>{{ errors.calories }}</span>
    </span>
  </TableCell>
  <TableCell class="text-center">
    <span v-if="!isEditing">{{ product.carbs }}</span>
    <span v-else>
      <Input
        type="text"
        class="text-black"
        v-model="carbs"
        v-bind="carbsAttrs"
        placeholder="Углеводы"
      />
      <span>{{ errors.carbs }}</span>
    </span>
  </TableCell>
  <TableCell class="text-center">
    <span v-if="!isEditing">{{ product.fats }}</span>
    <span v-else>
      <Input type="text" class="text-black" v-model="fats" v-bind="fatsAttrs" placeholder="Жиры" />
      <span>{{ errors.fats }}</span>
    </span>
  </TableCell>
  <TableCell class="text-center">
    <span v-if="!isEditing">{{ product.proteins }}</span>
    <span v-else>
      <Input
        type="text"
        class="text-black"
        v-model="proteins"
        v-bind="proteinsAttrs"
        placeholder="Белки"
      />
      <span>{{ errors.proteins }}</span>
    </span>
  </TableCell>
  <TableCell>
    <div class="flex justify-center">
      <Pencil v-if="!isEditing" @click="isEditing = true" class="cursor-pointer" />
      <Save v-else @click="handleProductSave" class="cursor-pointer" />
    </div>
  </TableCell>
  <TableCell>
    <div class="flex justify-center">
      <X v-if="!isEditing" @click="productsStore.remove(index)" class="cursor-pointer" />

      <Ban v-else @click="handleReset" class="cursor-pointer" />
    </div>
  </TableCell>
</template>
