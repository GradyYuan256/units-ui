<script>
export default {
  name: "UIcon",
};
</script>

<script setup>
import { computed } from "vue";
import '../../assets/js/iconfont.js'

const props = defineProps({
  name: {
    type: String,
    default: "",
  },
});

const IconName = computed(() => {
  return `#icon-${props.name}`;
});
</script>

<template>
  <svg class="u-icon" aria-hidden="true" @click="handleClick">
    <use :xlink:href="IconName"></use>
  </svg>
</template>

<style lang="less">
@import "./index.less";
</style>
