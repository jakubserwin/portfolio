<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { observer } from '@/helpers';
import { useObserverStore } from '@/store/observer';
import { ObserverAction, Project } from '@/types';

interface Props {
  project: Project;
}

const props = defineProps<Props>()

const {
  title,
  description,
  problem,
  timeline,
  industry,
  goals
} = props.project.details

const { logo, bgColor } = props.project

const observerStore = useObserverStore()

const banner = ref<HTMLDivElement | null>(null)
const intro = ref<HTMLDivElement | null>(null)

onMounted(() => {
  if(!banner.value || !intro.value) return
  observer(ObserverAction.OBSERVE, banner.value, intro.value)
})
onBeforeUnmount(() => {
  if(!banner.value || !intro.value) return
  observer(ObserverAction.UNOBSERVE, banner.value, intro.value)
})
</script>

<template>
  <div
    ref="banner"
    class="banner"
    :class="{'element-hidden': observerStore.useObserverOnCaseStudy}"
    :style="{background: bgColor}"
  >
    <component :is="logo" />
  </div>
  <div
    ref="intro"
    class="intro"
    :class="{'element-hidden': observerStore.useObserverOnCaseStudy}"
  >
    <div class="intro__box">
      <p class="intro__before">
        project
      </p>
      <h1 class="intro__text intro__text--header">
        {{ title }}
      </h1>
    </div>
    <div class="intro__box">
      <p class="intro__before">
        description
      </p>
      <p class="intro__text">
        {{ description }}
      </p>
    </div>
    <div class="intro__cols-2">
      <div class="intro__box">
        <p class="intro__before">
          timeline
        </p>
        <p class="intro__text">
          {{ timeline }}
        </p>
      </div>
      <div class="intro__box">
        <p class="intro__before">
          industry
        </p>
        <p class="intro__text">
          {{ industry }}
        </p>
      </div>
    </div>
    <div class="intro__box">
      <p class="intro__before">
        problem
      </p>
      <p class="intro__text">
        {{ problem }}
      </p>
    </div>
    <div class="intro__box">
      <p class="intro__before">
        goals
      </p>
      <p class="intro__text">
        {{ goals }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./CaseStudyBanner.scss" />
