<script setup lang="ts">
import Heading from '@/components/UI/VHeading/VHeading.vue'
import ProjectCard from '@/components/layouts/TheProjects/ProjectCard/ProjectCard.vue'
import { projects } from "@/mocks/projects";
</script>

<template>
  <section id="projects">
    <div class="container">
      <heading label="Latest Projects" />
      <div
        ref="projectsParent"
        class="projects element-hidden"
      >
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped src="./TheProjects.scss" />

