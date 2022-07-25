<script setup lang="ts">

interface Props {
  label: string;
  isDark: boolean;
}

const props = defineProps<Props>()
</script>

<template>
  <h2
    ref="header"
    class="heading element-hidden"
    :class="props.isDark ? 'heading__dark' : ''"
  >
    {{ props.label }}
  </h2>
</template>

<style lang="scss" scoped src="./VHeading.scss" />
