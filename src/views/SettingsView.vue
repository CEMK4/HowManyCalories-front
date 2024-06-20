<script setup lang="ts">
import { Pencil, Ban, Save } from 'lucide-vue-next'
import Button from '@/components/ui/button/Button.vue'
import Input from '@/components/ui/input/Input.vue'
import { User } from 'lucide-vue-next'
import { useUserStore } from '@/stores/user'
import { ref } from 'vue'
import { useForm } from 'vee-validate'
import * as yup from 'yup'

const userStore = useUserStore()

const schema = yup.object({
  age: yup.number().required('Это обязательное поле!').typeError('Введите число!'),
  height: yup.number().required('Это обязательное поле!').typeError('Введите число!'),
  weight: yup.number().required('Это обязательное поле!').typeError('Введите число!')
})

const { defineField, handleSubmit } = useForm({
  validationSchema: schema
})

const [age, ageAttrs] = defineField('age')
const [height, heightAttrs] = defineField('height')
const [weight, weightAttrs] = defineField('weight')

age.value = userStore.userAge
height.value = userStore.userHeight
weight.value = userStore.userWeight

const isEditing = ref(false)

const handleUserUpdate = handleSubmit((values) => {
  userStore.update(values.age, values.height, values.weight)
  isEditing.value = false
})

const handleReset = () => {
  age.value = userStore.userAge
  height.value = userStore.userHeight
  weight.value = userStore.userWeight
  isEditing.value = false
}
</script>

<template>
  <main>
    <Button class="ml-auto mr-0 flex" @click="isEditing = true" v-if="!isEditing">
      <Pencil />
    </Button>
    <div class="">
      <Button class="ml-auto mr-0 flex" @click="handleUserUpdate" v-if="isEditing">
        <Save />
      </Button>
      <Button class="ml-auto mr-0 flex" @click="handleReset" v-if="isEditing">
        <Ban />
      </Button>
    </div>
    <div class="mt-24">
      <User
        class="my-2 ml-auto mr-auto h-12 w-12 items-center justify-between rounded-full bg-slate-500 text-center"
      />
      <div class="ml-auto mr-auto items-center justify-between text-center">
        <div class="my-2 flex items-center justify-center">
          Возраст: <span v-if="!isEditing" class="mx-1">{{ userStore.userAge }}</span>
          <span v-else>
            <Input
              class="mx-1 h-6 w-10 p-0 text-center text-black"
              v-model="age"
              v-bind="ageAttrs"
              placeholder="Возраст"
            />
          </span>
          лет
        </div>
        <div class="my-2 flex items-center justify-center">
          Рост:
          <span v-if="!isEditing" class="mx-1">{{ userStore.userHeight }}</span>
          <span v-else>
            <Input
              class="mx-1 h-6 w-12 p-0 text-center text-black"
              v-model="height"
              v-bind="heightAttrs"
              placeholder="Рост"
            />
          </span>
          см
        </div>
        <div class="my-2 flex items-center justify-center">
          Вес:
          <span v-if="!isEditing" class="mx-1">{{ userStore.userWeight }}</span>
          <span v-else>
            <Input
              class="mx-1 h-6 w-10 p-0 text-center text-black"
              v-model="weight"
              v-bind="weightAttrs"
              placeholder="Вес"
            />
          </span>
          кг
        </div>
        <div class="my-2">Приемы пищи: {{ userStore.userMeals }}</div>
        <div class="my-2">Потребление калорий: {{ userStore.userCalCons }}</div>
        <div class="my-2">Потребление воды: {{ userStore.userWaterCons }}</div>
      </div>
    </div>
  </main>
</template>
