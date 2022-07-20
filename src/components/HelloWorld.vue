<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <h1>isDark : {{ isDark }}</h1>
  <button @click="toggleDark()">
    toggle theme
  </button>
</template>