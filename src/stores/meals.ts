import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMealsStore = defineStore('products', () => {
  const mealsList = ref({})

  return { mealsList }
})
