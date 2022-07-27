<script setup lang="ts">
import Heading from "@/components/UI/VHeading/VHeading.vue";
import GitHub from '@/assets/images/icons/github.svg'
import LinkedIn from '@/assets/images/icons/linkedin.svg'
import Wave from '@/assets/images/wave.svg'
</script>

<template>
  <div
    id="contact"
    class="contact"
  >
    <wave class="wave"/>
    <div class="container">
      <heading
        label="Get in Touch"
      />
      <form
        ref="form"
        action="https://formsubmit.co/kuba.serwin99@gmail.com"
        method="POST"
        class="form element-hidden"
      >
        <input
          type="hidden"
          name="_subject"
          value="Email from portfolio"
        >
        <input
          type="hidden"
          name="_template"
          value="table"
        >
        <input
          type="hidden"
          name="_captcha"
          value="false"
        >
        <input
          type="hidden"
          name="_next"
          value="http://jakubserwin.com/thank-you"
        >
        <div class="form__wrapper">
          <input
            type="text"
            name="name"
            class="form__input"
            placeholder="Name"
            required
          >
          <input
            type="email"
            name="email"
            class="form__input form__input--email"
            placeholder="Email"
            required
          >
          <textarea
            class="form__textarea"
            name="story"
            rows="5"
            cols="33"
            placeholder="Message"
            required
          />
          <input
            type="submit"
            value="Send"
            class="form__submit"
          >
        </div>
      </form>
      <div
        ref="socials"
        class="contact__socials element-hidden"
      >
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
  </div>
</template>

<style lang="scss" scoped src="./TheForm.scss" />
