<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import Moon from '@/assets/images/theme/moon.svg'
import Sun from '@/assets/images/theme/sun.svg'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div
    class="theme-switch"
    @click="toggleDark()"
  >
    <Moon v-if="!isDark" />
    <Sun v-else />
    <div class="theme-switch__tip">
      Switch to your prefered theme
    </div>
  </div>
</template>

<style lang="scss" scoped src="./ThemeSwitch.scss" />
