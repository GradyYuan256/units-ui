<script>
export default {
  name: "UCheckbox",
};
</script>
<script setup>
import {
  ref,
  watch,
  computed,
  inject,
  useSlots,
  reactive,
} from "vue";

const props = defineProps({
  value: {
    type: [String, Number],
    default: "",
  },
  label: {
    type: String,
    default: "",
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
  indeterminate: {
    type: Boolean,
    default: false,
  },
});

const slots = useSlots();
const emits = defineEmits(["update:checked"]);

const injectValue = inject("value", reactive({ value: [] }));
const injectMax = inject("max", undefined);
const injectMin = inject("min", undefined);
const injectName = inject("name", "");
const injectDisabled = inject("disabled", false);
const checkboxGroupInstance = inject("checkboxGroupInstance", null);

let checkboxDisabled =
  ref(props.disabled) || computedClass.value.includes("is-disabled");
const checkboxText = computed(() => {
  return props.label ? props.label : "";
});

const calcClass = () => {
  let classList = [];
  if (injectMax || injectMin) {
    if (
      injectValue.value.length >= injectMax &&
      !injectValue.value.includes(props.value)
    ) {
      classList.push("is-disabled");
    }
    if (
      injectValue.value.length <= injectMin &&
      injectValue.value.includes(props.value)
    ) {
      classList.push("is-disabled");
    }
  }
  if (injectValue.value.includes(props.value)) {
    classList.push("is-checked");
  }
  if (injectDisabled || props.disabled) {
    classList.push("is-disabled");
    checkboxDisabled.value = true;
  }
  if (props.indeterminate && !classList.includes("is-checked")) {
    classList.push("is-indeterminate");
  }
  return classList;
};
const computedClass = computed(() => {
  if (!checkboxGroupInstance) {
    return [
      props.checked ? "is-checked" : "",
      props.disabled ? "is-disabled" : "",
      props.indeterminate ? "is-indeterminate" : "",
    ];
  }
  return [...calcClass()].filter(Boolean);
});

watch(
  injectValue,
  () => {
    if (injectMax || injectMin) {
      checkboxDisabled.value = computedClass.value.includes("is-disabled");
    }
  },
  { deep: true }
);

const checkboxValue = computed({
  get() {
    if (!checkboxGroupInstance) {
      return props.checked;
    }
    return checkboxGroupInstance
      ? checkboxGroupInstance?.props?.value
      : props.value;
  },
  set(v) {
    if (checkboxGroupInstance) {
      emits("update:checked", v.includes(props.value));
      checkboxGroupInstance.emit("update:value", v);
    } else {
      emits("update:checked", v);
    }
  },
});
</script>

<template>
  <label class="u-checkbox" :class="computedClass">
    <input
      type="checkbox"
      aria-hidden="false"
      class="u-checkbox__input"
      v-model="checkboxValue"
      :value="value"
      :name="name || injectName"
      :disabled="checkboxDisabled"
    />
    <div class="u-checkbox__wrapper"></div>
    <div class="u-checkbox__label">
      <template v-if="slots.default"><slot></slot></template>
      <template v-else>{{ checkboxText }}</template>
    </div>
  </label>
</template>

<style lang="less">
@import "./index.less";

</style>
