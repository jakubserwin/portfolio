<script setup lang="ts">

interface Props {
  label: string;
}

const props = defineProps<Props>()
</script>

<template>
  <h2
    ref="header"
    class="heading element-hidden"
  >
    {{ props.label }}
  </h2>
</template>

<style lang="scss" scoped src="./VHeading.scss" />
