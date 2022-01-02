<script>
export default {
  name: 'URadioGroup'
}
</script>
<script setup>
import { provide, getCurrentInstance } from "vue"
const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  value: {
    type: [String, Number],
    default: ''
  }
});

provide('radioGroupInstance', getCurrentInstance())
provide('name', props.name)
</script>
<template>
  <div class="u-radio-group">
    <slot></slot>
  </div>
</template>

<style lang="less">
@import "./index.less";
</style>
