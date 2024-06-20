<script setup lang="ts">
import DropDownMenu from '@/components/DropDownMenu.vue'
import { Settings } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="ml-auto mr-auto flex items-center justify-between bg-[#171717] py-1 pr-2">
    <DropDownMenu />

    <RouterLink to="/" class="text-xl font-medium italic">How Many Calories</RouterLink>

    <RouterLink to="/settings"><Settings /></RouterLink>
  </header>
</template>
