<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRoot,
  DropdownMenuTrigger
} from 'radix-vue'

const toggleState = ref(false)
</script>

<template>
  <DropdownMenuRoot v-model:open="toggleState">
    <DropdownMenuTrigger
      class="text-grass-11 hover:bg-green3 inline-flex h-[35px] w-[35px] items-center justify-center border-0 bg-transparent outline-none focus:shadow-none"
      aria-label="Customise options"
    >
      <Icon icon="radix-icons:hamburger-menu" class="stroke-white" />
    </DropdownMenuTrigger>

    <DropdownMenuPortal>
      <DropdownMenuContent
        class="data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade min-w-[220px] rounded-md bg-[#353535] p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] outline-none will-change-[opacity,transform]"
        :side-offset="5"
      >
        <DropdownMenuItem
          value="Home"
          class="text-grass11 data-[disabled]:text-mauve8 data-[highlighted]:bg-green9 data-[highlighted]:text-green1 group relative flex h-[25px] select-none items-center rounded-[3px] px-[5px] pl-[25px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none"
        >
          <RouterLink to="/">Главная</RouterLink>
        </DropdownMenuItem>
        <DropdownMenuItem
          value="Продукты"
          class="text-grass11 data-[disabled]:text-mauve8 data-[highlighted]:bg-green9 data-[highlighted]:text-green1 group relative flex h-[25px] select-none items-center rounded-[3px] px-[5px] pl-[25px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none"
        >
          <RouterLink to="/products">Продукты</RouterLink>
        </DropdownMenuItem>
        <DropdownMenuItem
          value="Рецепты"
          class="text-grass11 data-[disabled]:text-mauve8 data-[highlighted]:bg-green9 data-[highlighted]:text-green1 group relative flex h-[25px] select-none items-center rounded-[3px] px-[5px] pl-[25px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none"
        >
          <RouterLink to="/recipes">Рецепты</RouterLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>
