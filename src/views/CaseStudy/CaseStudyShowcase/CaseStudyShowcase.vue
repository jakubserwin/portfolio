<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { observer } from '@/helpers';
import { useObserverStore } from '@/store/observer';
import { ObserverAction } from '@/types';

interface Props {
  demoSrc: string;
  websiteUrl: string;
  sourceCodeUrl: string;
}

const props = defineProps<Props>()
const observerStore = useObserverStore()
const showcase = ref<HTMLDivElement | null>(null)
const showcaseHeading = ref<HTMLHeadingElement | null>(null)
const ctas = ref<HTMLDivElement | null>(null)

onMounted(() => {
  if(!showcase.value || !ctas.value || !showcaseHeading.value) return
  observer(ObserverAction.OBSERVE, showcase.value, ctas.value, showcaseHeading.value)
})
onBeforeUnmount(() => {
  if(!showcase.value || !ctas.value || !showcaseHeading.value) return
  observer(ObserverAction.UNOBSERVE, showcase.value, ctas.value, showcaseHeading.value)
})
</script>

<template>
  <div class="showcase">
    <h2
      ref="showcaseHeading"
      class="case-study__heading"
      :class="{'element-hidden': observerStore.useObserverOnCaseStudy}"
    >
      Project Showcase
    </h2>
    <div
      ref="showcase"
      class="showcase__media"
      :class="{'element-hidden': observerStore.useObserverOnCaseStudy}"
    >
      <iframe
        :src="props.demoSrc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
        allowfullscreen
      />
    </div>
    <div
      ref="ctas"
      class="showcase__ctas"
      :class="{'element-hidden': observerStore.useObserverOnCaseStudy}"
    >
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
