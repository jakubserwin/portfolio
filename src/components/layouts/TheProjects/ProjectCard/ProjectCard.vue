<script setup lang="ts">
import ArrowRight from '@/assets/images/icons/arrow-right.svg'
import { Project, ProjectStatus } from "@/types";

interface Props {
  project: Project;
}

const props = defineProps<Props>()

const { title, caption } = props.project.details
const { name, logo, bgColor, tools, status } = props.project

</script>

<template>
  <div class="project-card">
    <div
      class="project-card__header"
      :style="{background: bgColor}"
    >
      <component :is="logo" />
    </div>
    <div class="project-card__content">
      <div class="project-card__container">
        <p class="project-card__label">
          Title
        </p>
        <p class="project-card__name">
          {{ title }}
        </p>
      </div>
      <div class="project-card__container">
        <p class="project-card__label">
          Description
        </p>
        <p class="project-card__caption">
          {{ caption }}
        </p>
      </div>
      <div class="project-card__container project-card__footer">
        <div>
          <p class="project-card__label">
            Tools
          </p>
          <div class="project-card__tools">
            <component
              :is="tool"
              v-for="(tool, toolIndex) in tools"
              :key="toolIndex"
            />
          </div>
        </div>
        <div
          v-if="status === ProjectStatus.FINISHED "
          class="project-card__cta"
        >
          <router-link
            :to="`/case-study/${name}`"
          >
            See Case Study
            <arrow-right />
          </router-link>
        </div>
        <p
          v-else
          class="project-card__cta"
        >
          In Progress
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./ProjectCard.scss" />
