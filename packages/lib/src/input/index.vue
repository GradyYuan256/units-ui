<script>
export default {
  name: "UInput",
};
</script>

<script setup>
import { useSlots, computed } from "vue";
import UIcon from "../icon/index.vue";

const props = defineProps({
  value: {
    type: [String, Number],
    default: "",
  },
  type: {
    type: String,
    default: "text",
    validator: (value) => {
      return ["text", "textarea"].includes(value);
    },
  },
  placeholder: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "",
    validator: (value) => {
      return ["", "medium", "small"].includes(value);
    },
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["update:value"]);
const slots = useSlots();

let inputValue = computed({
  get() {
    return props.value;
  },
  set(val) {
    emits("update:value", val);
  },
});

let showClear = computed(() => {
  return props.clearable && inputValue.value !== "";
});

const computedClass = computed(() => {
  return {
    "has-prepend": slots.prepend,
    "has-append": slots.append,
    "is-disabled": props.disabled,
  };
});

const clearInput = () => {
  inputValue.value = "";
};
</script>

<template>
  <template v-if="type === 'textarea'">
    <div class="u-textarea" :class="computedClass">
        <textarea class="u-textarea__inner" :placeholder="props.placeholder" :disabled="disabled" v-model="inputValue"></textarea>
    </div>
  </template>
  <template v-else>
    <div class="u-input" :class="computedClass">
        <div class="u-input-box__prepend">
          <slot name="prepend"></slot>
        </div>
        <input class="u-input__inner" type="text" :placeholder="props.placeholder" :disabled="disabled" v-model="inputValue" />
        <u-icon class="u-input__clear" name="close" @click="clearInput" v-if="showClear"></u-icon>
        <div class="u-input-box__append">
          <slot name="append"></slot>
        </div>
    </div>
  </template>
</template>

<style lang="less">
@import "./index.less";
</style>
