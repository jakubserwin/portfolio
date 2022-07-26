<script setup lang="ts">
import GitHub from '@/assets/images/icons/github.svg'
import LinkedIn from '@/assets/images/icons/linkedin.svg'

const currentYear: number = new Date().getFullYear()
</script>
<template>

  <footer class="footer">
    <div class="container">
      <p>Jakub Serwin © {{ currentYear }}</p>
      <div class="footer__links">
        <a
          href="https://github.com/jakubserwin"
          target="_blank"
        >
          <git-hub />
        </a>
        <a
          href="https://www.linkedin.com/in/jakub-serwin-4a1539210/"
          target="_blank"
        >
          <linked-in />
        </a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped src="./TheFooter.scss" />
