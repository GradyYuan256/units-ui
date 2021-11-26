<script>
export default {
  name: "UIcon",
};
</script>

<script setup>
import { computed, onMounted } from "vue";
onMounted(() => {
  import('../../assets/js/iconfont.js').then((str) => {
    return str
  })
})
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
