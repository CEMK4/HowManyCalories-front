<script setup lang="ts">
import { type Ref, ref } from 'vue'
import { type DateValue, getLocalTimeZone, today } from '@internationalized/date'
import { Calendar } from '@/components/ui/calendar'
import MealCard from '@/components/MealCard.vue'

const dateValue = ref(today(getLocalTimeZone())) as Ref<DateValue>
</script>

<template>
  <main class="flex items-center justify-between sm:mx-48">
    <Calendar
      v-model="dateValue"
      :weekday-format="'short'"
      class="mb-auto mt-0 rounded-md border"
    />
    <div class="mb-auto mt-1 w-96 items-center">
      <MealCard type="breakfast" value="Завтрак" :dateValue />
      <MealCard type="dinner" value="Обед" :dateValue />
      <MealCard type="supper" value="Ужин" :dateValue />
      <MealCard type="other" value="Перекус/Другое" :dateValue />
      <MealCard type="water" value="Вода" :dateValue />
    </div>
  </main>
</template>
