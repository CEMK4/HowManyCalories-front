import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', () => {
  const productsList = ref([
    { title: 'Огурец', calories: 300, proteins: 10, fats: 25, carbs: 100 },
    { title: 'Грудка', calories: 400, proteins: 23, fats: 54, carbs: 240 }
  ])
  function add(title: string, calories: number, proteins: number, fats: number, carbs: number) {
    productsList.value.push({
      title: title,
      calories: calories,
      proteins: proteins,
      fats: fats,
      carbs: carbs
    })
  }
  function update(
    id: number,
    title: string,
    calories: number,
    proteins: number,
    fats: number,
    carbs: number
  ) {
    productsList.value[id] = {
      title: title,
      calories: calories,
      proteins: proteins,
      fats: fats,
      carbs: carbs
    }
  }
  function remove(id: number) {
    productsList.value.splice(id, 1)
  }

  return { productsList, add, update, remove }
})
