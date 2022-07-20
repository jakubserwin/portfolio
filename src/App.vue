<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <HelloWorld />
  <div class="test">
    Theme
  </div>
</template>

<style lang="scss">
@use './styles' as *;

.test {
  margin-top: 1rem;
  background-color: var(--background);
  color: var(--text);
  padding: 10px;
}
</style>
