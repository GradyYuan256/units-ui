<script>
export default {
  name: "UMessageBox",
};
</script>

<script setup>
import { reactive } from "vue";
import UIcon from '../icon/index.vue'
import UButton from '../button/index.vue'

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    default: "",
  },
  showCancelBtn: {
    type: Boolean,
    default: false,
  },
  confirmBtnText: {
    type: String,
    default: "OK",
  },
  cancelBtnText: {
    type: String,
    default: "Cancel",
  },
  closeOnClickMask: {
    type: Boolean,
    default: true,
  },
  field: {
    type: String,
    default: "confirm",
    validator(value) {
      return ["confirm", "alert"].includes(value);
    },
  },
  enableHtml: {
    type: Boolean,
    default: false,
  },
});

const state = reactive({
    visible: false,
    eventType: 'confirm'
});
const open = () => {
  state.visible = true;
};
const close = () => {
  state.visible = false;
};
// const setVisible = (value) => {
//   state.visible = !!value;
// };

const closeOnClickMask = () => {
    if(props.field === 'alert') {
        return
    }
    if(props.closeOnClickMask) {
        handleCancel()
        return
    }
}

const handleCancel = () => {
    state.eventType = 'cancel'
    close()
}
const confirmClick = () => {
    state.eventType = 'confirm'
    close()
}

defineExpose({ open, state });

</script>

<template>
  <transition name="u-message-box-fade">
    <div class="u-message-box" v-show="state.visible" @click.self="closeOnClickMask">
      <div class="u-message-box__core">
        <header>
            <span class="u-message-box__title">{{ title }}</span>
            <u-icon class="u-icon-close" name="close" @click="handleCancel"></u-icon>
        </header>
        <main>
            <div v-if="enableHtml" v-html="content"></div>
            <div v-else>{{ content }}</div>
        </main>
        <footer>
            <u-button v-if="showCancelBtn || field != 'alert'" @click="handleCancel">{{ cancelBtnText }}</u-button>
            <u-button type="primary" @click="confirmClick">{{ confirmBtnText }}</u-button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<style lang="less">
@import "./index.less";

.u-message-box-fade-enter-from,
.u-message-box-fade-leave-to {
  opacity: 0.5;
}

.u-message-box-fade-enter-active,
.u-message-box-fade-leave-active {
  transition: opacity 0.1s ease;
}
</style>
