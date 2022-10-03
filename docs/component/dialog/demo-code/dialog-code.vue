<script setup>
import { ref } from "vue";

let visible = ref(false);
const toggle = () => {
  visible.value = !visible.value;
};

const ok = () => {
  toggle()
  console.log('slot footer --> ok');
};
const cancel = () => {
  toggle()
  console.log('slot footer --> cancel');
};

const confirm = () => {
  console.log('confirm');
  setTimeout(() => {
    toggle()
  }, 2000)
};
const cancelBtn = () => {
  console.log('cancel');
};
const close = () => {
  console.log('close');
};
const beforeClose = () => {
  console.log('beforeClose');
};
let fullscreen = ref(false)
const zoom = () => {
    fullscreen.value = !fullscreen.value
}
</script>
<template>
  <div>
    <u-button @click="toggle">打开对话框</u-button>
    <u-dialog
      title="注意标题"
      width="30vw"
      top="20vh"
      maxHeight="400px"
      v-model:visible="visible"
      :fullscreen="fullscreen"
      :closeOnClickMask="true"
      :showClose="true"
      @ok="confirm"
      @cancel="cancelBtn"
      @beforeClose="beforeClose"
    >
      <template v-slot:title>
        <span>标题 </span>
        <span @click="zoom" v-if="!fullscreen"> [全屏]</span>
        <span @click="zoom" v-else> [还原]</span>
      </template>
      <template v-slot:content>
        <p>Hello, Welcome to <i>Units UI</i>!</p>
        <p>欢迎来到 <i>Units UI</i>!</p>
      </template>
      <template v-slot:footer>
        <u-button @click="cancel">取 消</u-button>
        <u-button @click="ok" type="primary">确 定</u-button>
      </template>
    </u-dialog>
  </div>
</template>