<script setup lang="ts">
import Heading from "@/components/UI/VHeading/VHeading.vue";

interface Props {
  demoSrc: string;
  websiteUrl: string;
  sourceCodeUrl: string;
}

const props = defineProps<Props>()
</script>

<template>
  <div class="showcase">
    <heading
      label="Project Showcase"
    />
    <div
      ref="showcase"
      class="showcase__media element-hidden"
    >
      <iframe
        :src="props.demoSrc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
        allowfullscreen
      />
    </div>
    <div class="showcase__ctas">
      <a
        v-if="props.websiteUrl"
        class="showcase__btn"
        :href="props.websiteUrl"
        target="_blank"
      >
        Visit Website
      </a>
      <a
        v-if="props.sourceCodeUrl"
        class="showcase__btn"
        :href="props.sourceCodeUrl"
        target="_blank"
      >
        View Source Code
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./CaseStudyShowcase.scss" />
