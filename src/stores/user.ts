import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const userAge = ref(18)
  const userHeight = ref(180)
  const userWeight = ref(70)
  const userMeals = ref()
  const userWaterCons = ref(70)
  const userCalCons = ref(70)
  function update(age: number, height: number, weight: number) {
    userAge.value = age
    userHeight.value = height
    userWeight.value = weight
  }

  return { userAge, userHeight, userWeight, userMeals, userWaterCons, userCalCons, update }
})
