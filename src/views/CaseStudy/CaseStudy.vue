<script setup lang="ts">
import { useRoute } from 'vue-router'
import TheHeader from '@/components/layouts/TheHeader/TheHeader.vue'
import CaseStudyBanner from "@/views/CaseStudy/CaseStudyBanner/CaseStudyBanner.vue";
import { Project } from "@/types";
import {projects} from "@/mocks/projects";
import Heading from "@/components/UI/VHeading/VHeading.vue";
import CaseStudyShowcase from "@/views/CaseStudy/CaseStudyShowcase/CaseStudyShowcase.vue";

const route = useRoute()

const projectName = route.params.name

const project: Project | undefined = projects.find(({name}) => name === projectName)

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
          <heading
            label="My Role"
          />
          <div
            ref="role"
            class="role__content element-hidden"
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
        <!--        <case-summary :content="project.info.summary" />-->
      </div>
    </div>
  </div>
<!--  <div class="copyright">-->
<!--    <div class="container">-->
<!--      <p>Jakub Serwin © 2021</p>-->
<!--      <div>-->
<!--        <a-->
<!--          href="https://github.com/jakubserwin"-->
<!--          target="_blank"-->
<!--        />-->
<!--        <a-->
<!--          href="https://www.linkedin.com/in/jakub-serwin-4a1539210/"-->
<!--          target="_blank"-->
<!--        />-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
</template>

<style lang="scss" scoped src="./CaseStudy.scss" />
