<script>
export default {
  name: "UDialog",
};
</script>
<script setup>
import { computed, useSlots } from "vue";
import UIcon from "../icon/index.vue";
import UButton from "../button/index.vue";

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "",
  },
  closeOnClickMask: {
    type: Boolean,
    default: false,
  },
  fullscreen: {
    type: Boolean,
    default: false,
  },
  width: {
    type: String,
    default: "",
    validator(value) {
      if (!value) {
        return true;
      }
      let reg = /^[0-9]+(px)|%|(vw)$/g;
      if (!reg.test(value)) {
        return false;
      }
      return true;
    },
  },
  maxHeight: {
    type: String,
    default: "",
    validator(value) {
      if (!value) {
        return true;
      }
      let reg = /^[0-9]+(px)|%|(vw)$/g;
      if (!reg.test(value)) {
        return false;
      }
      return true;
    },
  },
  top: {
    type: String,
    default: "",
    validator(value) {
      if (!value) {
        return true;
      }
      let reg = /^[0-9]+(px)|%|(vh)$/g;
      if (!reg.test(value)) {
        return false;
      }
      return true;
    },
  },
  showClose: {
    type: Boolean,
    default: true,
  },
  ok: {
    type: Function,
  },
  cancel: {
    type: Function,
  },
});

const computedClass = computed(() => {
  return [props.fullscreen ? "is-fullscreen" : ""];
});
const computedStyle = computed(() => {
  return {
    width: props.fullscreen ? "100%" : props.width,
    top: props.fullscreen ? 0 : props.top ? props.top : "15vh",
    "max-height": props.fullscreen ? '' : (props.maxHeight ? props.maxHeight : "auto"), // maxHeight 不可以和 全屏功能使用
  }
});

const slots = useSlots();

const emits = defineEmits(["update:visible", "beforeClose", "ok", "cancel"]);
const close = () => {
  emits("beforeClose");
  emits("update:visible", false);
};
const clickFakeMask = () => {
  if (props.closeOnClickMask) {
    emits("cancel");
    close();
  }
};
const confirm = () => {
  emits("ok");
};
const cancelDialog = () => {
  emits("cancel");
  close();
};
</script>

<template>
  <template v-if="visible">
    <teleport to="body">
      <div class="u-dialog-wrapper">
        <div class="u-dialog-mask"></div>
        <div class="u-dialog-box" @click.self="clickFakeMask">
          <div class="u-dialog" :class="computedClass" :style="computedStyle">
            <header>
              <template v-if="slots.title">
                <slot name="title"></slot>
              </template>
              <template v-else>
                {{ title }}
              </template>
              <u-icon
                name="close"
                class="u-icon-close"
                v-if="showClose"
                @click="cancelDialog"
              ></u-icon>
            </header>
            <main>
              <template v-if="slots.content">
                <slot name="content"></slot>
              </template>
              <template v-else>
                <slot></slot>
              </template>
            </main>
            <footer>
              <template v-if="slots.footer">
                <slot name="footer"></slot>
              </template>
              <template v-else>
                <u-button @click="cancelDialog">取消</u-button>
                <u-button @click="confirm" type="primary">确定</u-button>
              </template>
            </footer>
          </div>
        </div>
      </div>
    </teleport>
  </template>
</template>

<style lang="less">
@import "./index.less";

</style>
