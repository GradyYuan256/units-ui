<script>
export default {
  name: "URadio",
};
</script>
<script setup>
import { computed, inject, useSlots } from "vue";

const props = defineProps({
  value: {
    type: [String, Number],
    default: "",
  },
  label: {
    type: [String, Number],
    default: "",
    require: true,
  },
  name: {
    type: String,
    default: "",
  },
  checked: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const slots = useSlots()
const radioText = computed(() => {
  return props.label ? props.label : null;
});
const computedClass = computed(() => {
  return [
    props.checked ? "is-checked" : "",
    props.label == radioValue.value ? "is-checked" : "",
    props.disabled ? "is-disabled" : "",
  ];
});

const injectName = inject("name", '');
const radioGroupInstance = inject("radioGroupInstance", null);
const emits = defineEmits(["update:value"]);
const radioValue = computed({
  get() {
    return radioGroupInstance ? radioGroupInstance?.props?.value : props.value;
  },
  set(v) {
    if (radioGroupInstance) {
      radioGroupInstance.emit("update:value", v);
    } else {
      emits("update:value", v);
    }
  },
});
</script>

<template>
  <label class="u-radio" :class="computedClass">
    <input
      type="radio"
      aria-hidden="false"
      class="u-radio__input"
      v-model="radioValue"
      :name="props.name || injectName"
      :value="props.label"
      :disabled="disabled"
      :checked="checked"
    />
    <div class="u-radio__dot-box"></div>
    <div class="u-radio__label">
      <template v-if="slots.default"><slot></slot></template>
      <template v-else>{{ radioText }}</template>
    </div>
  </label>
</template>

<style lang="less">
@import "./index.less";
</style>
