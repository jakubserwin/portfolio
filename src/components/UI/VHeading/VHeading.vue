<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import { observer } from '@/helpers';
import { useObserverStore } from "@/store/observer";
import { ObserverAction } from "@/types";

interface Props {
  label: string;
}
const props = defineProps<Props>()

const observerStore = useObserverStore()
const header = ref<HTMLDivElement | null>(null)

onMounted(() => {
  if(!header.value) return
  observer(ObserverAction.OBSERVE, header.value)
})
onBeforeUnmount(() => {
  if(!header.value) return
  observer(ObserverAction.OBSERVE, header.value)
})
</script>

<template>
  <h2
    ref="header"
    class="heading element-hidden"
    :class="{'heading__transitions': observerStore.useObserver}"
  >
    {{ props.label }}
  </h2>
</template>

<style lang="scss" scoped src="./VHeading.scss" />
