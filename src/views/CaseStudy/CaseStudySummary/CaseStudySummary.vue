<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import { observer } from "@/helpers";
import { useObserverStore } from "@/store/observer";
import { ObserverAction } from "@/types";

interface Props {
  content: string;
}

const props = defineProps<Props>()
const observerStore = useObserverStore()
const summary = ref<HTMLDivElement | null>(null)
const summaryHeading = ref<HTMLHeadingElement | null>(null)

onMounted(() => {
  if(!summary.value || !summaryHeading.value) return
  observer(ObserverAction.OBSERVE, summary.value, summaryHeading.value)
})
onBeforeUnmount(() => {
  if(!summary.value || !summaryHeading.value) return
  observer(ObserverAction.UNOBSERVE, summary.value, summaryHeading.value)
})
</script>

<template>
  <div class="summary">
    <h2
      ref="summaryHeading"
      class="case-study__heading"
      :class="{'element-hidden': observerStore.useObserverOnCaseStudy}"
    >
      Summary
    </h2>
    <p
      ref="summary"
      :class="{'element-hidden': observerStore.useObserverOnCaseStudy}"
    >
      {{ props.content }}
    </p>
  </div>
</template>

<style lang="scss" scoped src="./CaseStudySummary.scss" />
