<script setup lang="ts">
import ArrowRight from '@/assets/images/icons/arrow-right.svg'
</script>

<template>
  <div class="confirmation">
    <div class="confirmation__spinner">
      <svg class="frame">
        <circle
          class="circle"
          cx="50%"
          cy="50%"
          r="30"
          stroke="#06D6A0"
          stroke-width="4"
          fill-opacity="0"
        />
      </svg>
      <svg
        class="check"
        width="35"
        height="35"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 7.00009L9 19.0001L3.5 13.5001L4.91 12.0901L9 16.1701L19.59 5.59009L21 7.00009Z"
          fill="#06D6A0"
        />
      </svg>
    </div>
    <p class="confirmation__heading">
      Message successfully sent!
    </p>
    <p class="confirmation__desc">
      Thanks for your message. I'll be in touch shortly.
    </p>
    <router-link
      to="/"
      class="confirmation__btn"
    >
      <arrow-right />
      Go back
    </router-link>
  </div>
</template>

<style lang="scss" scoped src="./ThankYou.scss" />
