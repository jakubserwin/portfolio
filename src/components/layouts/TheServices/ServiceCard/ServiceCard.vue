<script setup lang="ts">
import { Service } from "@/types";

interface Props {
  service: Service
}

const props = defineProps<Props>()
</script>

<template>
  <div class="service-card">
    <component :is="props.service.img" />
    <h3 class="service-card__heading">
      {{ props.service.title }}
    </h3>
    <p class="service-card__description">
      {{ props.service.label }}
    </p>
  </div>
</template>

<style lang="scss" scoped src="./ServiceCard.scss" />
