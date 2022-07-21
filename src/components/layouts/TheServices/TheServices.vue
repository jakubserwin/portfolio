<script setup lang="ts">
import { services } from '@/mocks/services'
import ServiceCard from "@/components/layouts/TheServices/ServiceCard/ServiceCard.vue";
</script>

<template>
  <section
    id="services"
    class="services"
  >
    <div class="container">
      <div
        v-if="services"
        class="services__cards"
      >
        <service-card
          v-for="service in services"
          :key="service.id"
          :service="service"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped src="./TheServices.scss" />
