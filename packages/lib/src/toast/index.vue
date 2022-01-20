<script>
export default {
  name: "UToast",
};
</script>

<script setup>
import { computed, onMounted, ref } from "vue";

let visible = ref(false);
const props = defineProps({
  message: {
    type: String,
    default: "",
  },
  duration: {
    type: Number,
    default: 3000,
  },
  enableHtml: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: "default",
    validator(value) {
      if (value === "") {
        return true;
      }
      return [
        "default",
        "primary",
        "info",
        "success",
        "warning",
        "error",
      ].includes(value);
    },
  },
});

const computedClass = computed(() => {
  return [
    props.type ? `is-${props.type}` : "",
    visible.value ? 'is-active' : ''
  ];
});

const open = () => {
  visible.value = true;
};
const close = () => {
  visible.value = false;
};

let timer = null
onMounted(() => {
  open()
  timer = setTimeout(() => {
    close()
    clearTimeout(timer)
    timer = null
  }, props.duration)
})
defineExpose({ open });

</script>

<template>
  <div class="u-toast">
    <div class="u-toast__inner" :class="computedClass">
        <div class="u-toast--message" v-if="enableHtml" v-html="message"></div>
        <div class="u-toast--message" v-else>{{ message }}</div>
      </div>
  </div>
</template>

<style lang="less">
@import "./index.less";

</style>
