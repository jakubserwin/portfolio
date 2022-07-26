<script setup lang="ts">
import Heading from "@/components/UI/VHeading/VHeading.vue";

interface Props {
  content: string;
}

const props = defineProps<Props>()
</script>

<template>
  <div class="summary">
    <heading label="Summary" />
    <p
      ref="summary"
      class="element-hidden"
    >
      {{ props.content }}
    </p>
  </div>
</template>

<style lang="scss" scoped src="./CaseStudySummary.scss" />
