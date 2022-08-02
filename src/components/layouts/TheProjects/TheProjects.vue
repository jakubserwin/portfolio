<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import Heading from '@/components/UI/VHeading/VHeading.vue'
import ProjectCard from '@/components/layouts/TheProjects/ProjectCard/ProjectCard.vue'
import { projects } from "@/mocks/projects";
import { observer } from '@/helpers';
import { useObserverStore } from "@/store/observer";
import { ObserverAction } from "@/types";

const observerStore = useObserverStore()
const projectsParent = ref<HTMLDivElement | null>(null)

onMounted(() => {
  if(!projectsParent.value) return
  observer(ObserverAction.OBSERVE, projectsParent.value)

})
onBeforeUnmount(() => {
  if(!projectsParent.value) return
  observer(ObserverAction.UNOBSERVE, projectsParent.value)
})
</script>

<template>
  <section id="projects">
    <div class="container">
      <heading label="Latest Projects" />
      <div
        ref="projectsParent"
        class="projects"
        :class="{'element-hidden': observerStore.useObserver}"
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

