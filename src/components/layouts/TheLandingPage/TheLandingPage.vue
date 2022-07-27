<script setup lang="ts">
import TheHeader from '@/components/layouts/TheHeader/TheHeader.vue'
import TheServices from '@/components/layouts/TheServices/TheServices.vue'
import HeroImage from "@/components/layouts/TheLandingPage/HeroImage/HeroImage.vue";
</script>

<template>
  <main class="landing-page">
    <div class="container">
      <the-header />
      <div class="landing-page__wrapper">
        <div class="landing-page__content">
          <p class="landing-page__hello">
            Hello
          </p>
          <h1 class="landing-page__heading">
            I’m Jakub Serwin,<span>Frontend Developer</span>
          </h1>
          <h2 class="landing-page__subheading">
            I specialize in designing and creating scalable, beautiful websites to help individuals and businesses grow.
          </h2>
          <button class="landing-page__button">
            See My Work
          </button>
        </div>
        <hero-image />
        <the-services />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped src="./TheLandingPage.scss" />
