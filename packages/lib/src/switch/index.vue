<script>
export default {
  name: "USwitch",
};
</script>
<script setup>
import { computed } from "vue";

const props = defineProps({
  value: {
    type: Boolean,
    default: true,
  },
  checked: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  square: {
    type: Boolean,
    default: false,
  },
});

const computedClass = computed(() => {
  return [
    props.checked ? "is-checked" : "",
    props.value ? "is-checked" : "",
    props.disabled ? "is-disabled" : "",
    props.square ? "is-square" : "",
  ];
});

const emits = defineEmits(["update:value"]);
const switchValue = computed({
  get() {
    return props.value;
  },
  set(v) {
    emits("update:value", v);
  },
});

</script>

<template>
  <label class="u-switch" :class="computedClass">
    <input type="checkbox" class="u-switch__input" v-model="switchValue" :disabled="props.disabled">
    <span class="u-switch__core"></span>
  </label>
</template>

<style lang="less">
@import "./index.less";

</style>
