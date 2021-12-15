<script>
export default {
  name: "UMessage",
};
</script>

<script setup>
import { computed, onMounted, ref } from "vue";
import UIcon from "../icon/index.vue";

let visible = ref(false);
const props = defineProps({
  message: {
    type: String,
    default: "hello",
  },
  autoClose: {
    type: Boolean,
    default: true,
  },
  showClose: {
    type: Boolean,
    default: false,
  },
  duration: {
    type: Number,
    default: 3000,
  },
  enableHtml: {
    type: Boolean,
    default: false,
  },
  onClose: {
    type: Function,
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
  position: {
    type: String,
    default: "center",
    validator: (value) => {
      if (!value) {
        return true;
      }
      return ["left", "center", "right"].includes(value);
    },
  },
  customClass: {
    type: String,
    default: "",
  },
});

const computedClass = computed(() => {
  return [
    props.type ? `u-message--${props.type}` : "",
    props.position ? `is-${props.position}` : "is-center",
    props.customClass ? `${props.customClass}` : "",
  ];
});

onMounted(() => {
  if (props.autoClose) {
    startTimer();
  }
});

const startTimer = () => {
  let timer = setTimeout(() => {
    close();
    clearTimeout(timer);
    timer = null;
  }, props.duration);
};

const open = () => {
  visible.value = true;
};

const close = () => {
  props.onClose?.();
  visible.value = false;
};
defineExpose({ open, visible });
</script>

<template>
  <transition name="u-message-fade">
    <div class="u-message" :class="computedClass" v-show="visible">
      <div class="u-message__content">
        <span v-if="enableHtml" v-html="message"></span>
        <span v-else>{{ message }}</span>
      </div>
      <span
        class="u-message__close-btn"
        @click="close"
        v-if="showClose || !autoClose"
      >
        <u-icon name="close"></u-icon>
      </span>
    </div>
  </transition>
</template>

<style lang="less">
@import "./index.less";

.u-message-fade-enter-from {
  opacity: 0;
  transform: translateY(100%);

  &.is-center {
    transform: translate(-50%, 100%);
  }
}
.u-message-fade-leave-to {
  opacity: 0;
  transform: translateY(-50%);

  &.is-center {
    transform: translate(-50%, 0);
  }
}

.u-message-fade-enter-active {
  transition: opacity 0.2s ease-in, transform 0.2s ease-in;
}
.u-message-fade-leave-active {
  transition: opacity 0.2s ease-out, transform 0.2s ease-out;
}
</style>
