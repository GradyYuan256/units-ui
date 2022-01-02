<script>
export default {
  name: "URadioButton",
};
</script>
<script setup>
import { computed, inject } from "vue";

const props = defineProps({
  value: {
    type: [String, Number],
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  label: {
    type: [String, Number],
    default: "",
    require: true,
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

const radioText = computed(() => {
  return props.label ? props.label : null;
});
const computedClass = computed(() => {
  return [
    props.checked ? "is-checked" : "",
    props.label == radioBtnValue.value ? "is-checked" : "",
    props.disabled ? "is-disabled" : "",
  ];
});

const injectName = inject("name");
const radioGroupInstance = inject("radioGroupInstance");
const emits = defineEmits(["update:value"]);
const radioBtnValue = computed({
  get() {
    return radioGroupInstance ? radioGroupInstance.props.value : props.value;
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
  <label class="u-radio-button" :class="computedClass">
    <input
      type="radio"
      aria-hidden="false"
      class="u-radio-button__input"
      :name="props.name || injectName"
      :value="props.label"
      v-model="radioBtnValue"
      :disabled="disabled"
      :checked="checked"
    />
    <div class="u-radio-button__label">
      <template v-if="radioText">{{ radioText }}</template>
      <template v-else><slot></slot></template>
    </div>
  </label>
</template>

<style lang="less">
@import "./index.less";
</style>
