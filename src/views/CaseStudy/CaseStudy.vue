<script setup lang="ts">
import { useRoute } from 'vue-router'
import TheHeader from '@/components/layouts/TheHeader/TheHeader.vue'
import CaseStudyBanner from '@/views/CaseStudy/CaseStudyBanner/CaseStudyBanner.vue';
import { ObserverAction, Project } from '@/types';
import {projects} from '@/mocks/projects';
import CaseStudyShowcase from '@/views/CaseStudy/CaseStudyShowcase/CaseStudyShowcase.vue';
import CaseStudySummary from '@/views/CaseStudy/CaseStudySummary/CaseStudySummary.vue';
import TheFooter from '@/components/layouts/TheFooter/TheFooter.vue';
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { observer } from '@/helpers';
import { useObserverStore } from '@/store/observer';

const route = useRoute()
const observerStore = useObserverStore()

const projectName = route.params.name

const project: Project | undefined = projects.find(({name}) => name === projectName)
const role = ref<HTMLDivElement | null>(null)
const roleHeading = ref<HTMLHeadingElement | null>(null)

onMounted(() => {
  if(!role.value || !roleHeading.value) return
  observer(ObserverAction.OBSERVE, role.value, roleHeading.value)
})
onBeforeUnmount(() => {
  if(!role.value || !roleHeading.value) return
  observer(ObserverAction.UNOBSERVE, role.value, roleHeading.value)
})
</script>

<template>
  <div
    v-if="project"
    class="case-study"
  >
    <div class="container">
      <the-header />
    </div>
    <div class="wrapper">
      <div class="content">
        <case-study-banner :project="project" />
        <div class="role">
          <h2
            ref="roleHeading"
            class="case-study__heading"
            :class="{'element-hidden': observerStore.useObserverOnCaseStudy}"
          >
            My Role
          </h2>
          <div
            ref="role"
            class="role__content"
            :class="{'element-hidden': observerStore.useObserverOnCaseStudy}"
          >
            <div class="role__col">
              {{ project?.details.role1 }}
            </div>
            <div class="role__col">
              {{ project?.details.role2 }}
            </div>
          </div>
        </div>
        <case-study-showcase
          :demo-src="project?.demo"
          :website-url="project?.link"
          :source-code-url="project?.repository"
        />
        <case-study-summary :content="project?.details.summary" />
      </div>
    </div>
    <the-footer />
  </div>
</template>

<style lang="scss" scoped src="./CaseStudy.scss" />
