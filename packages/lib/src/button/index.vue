<script>
export default {
  name: "UButton",
};
</script>
<script setup>
import { computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: 'default',
    validator(value) {
      if(value === '') {
        return true
      }
      return ['default', 'primary', 'info', 'success', 'warning', 'error'].includes(value)
    }
  },
  plain: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  circle: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: '',
    validator(value) {
      if(value === '') {
        return true
      }
      return ['mini', 'small', 'medium'].includes(value)
    }
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
const computedClass = computed(() => {
  return [
    props.type ? `u-button--${props.type}` : "u-button--default",
    props.plain ? 'is-plain' : '',
    props.disabled ? 'is-disabled' : '',
    props.round ? 'is-round' : '',
    props.circle ? 'is-circle' : '',
    props.size ? `u-button--${props.size}` : '',
  ];
});
</script>

<template>
  <button
    type="button"
    class="u-button"
    :class="computedClass"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<style lang="less">
@import "./index.less";
</style>
