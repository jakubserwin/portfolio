<script setup lang="ts">
import { onBeforeMount } from "vue";
import ThemeSwitch from "@/components/UI/ThemeSwitch/ThemeSwitch.vue";

onBeforeMount(() => {
  if (!window.sessionStorage.getItem('animated')) {
    const body: HTMLBodyElement | null = document.querySelector('body')
    if(body)
      body.classList.add('animate');
    window.sessionStorage.setItem('animated', 'active');
  }
})
</script>

<template>
  <router-view />
  <theme-switch />
</template>

<style lang="scss" src="./styles/main.scss" />
