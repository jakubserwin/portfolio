<script setup lang="ts">
import { onBeforeMount } from 'vue';
import ThemeSwitch from '@/components/UI/ThemeSwitch/ThemeSwitch.vue';
import { useObserverStore } from '@/store/observer';
const observerStore = useObserverStore()

onBeforeMount(() => {
  if (!window.sessionStorage.getItem('animated')) {
    const body: HTMLBodyElement | null = document.querySelector('body')
    if(body)
      body.classList.add('animate');
    window.sessionStorage.setItem('animated', 'active');
    return
  } else {
    observerStore.useObserver = false
  }
})
</script>

<template>
  <router-view />
  <theme-switch />
</template>

<style lang="scss" src="./styles/main.scss" />
