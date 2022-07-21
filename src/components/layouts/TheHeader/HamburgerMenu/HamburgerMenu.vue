<script setup lang="ts">
import { useNavStore } from '@/store/nav'
const nav = useNavStore()

const toggleNav = (): void => {
  nav.toggleNav()
}
</script>

<template>
  <a
    href="#"
    class="hamburger"
    @click="toggleNav"
  >
    <span class="hamburger__box">
      <span
        class="hamburger__bar"
        :class="{ 'hamburger__bar--active': nav.isNavActive }"
      />
    </span>
  </a>
</template>

<style lang="scss" scoped src="./HamburgerMenu.scss" />
