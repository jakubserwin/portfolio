<script setup lang="ts">
import { Project } from "@/types";

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
</script>

<template>
  <div
    class="banner"
    :style="{background: bgColor}"
  >
    <component :is="logo" />
  </div>
  <div class="intro">
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
