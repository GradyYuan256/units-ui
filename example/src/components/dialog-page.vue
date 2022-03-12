<script setup>
import { ref } from "vue";
// import UButton from "../components/button/index.vue";
// import UDialog from "../components/dialog/index.vue";

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
const beforeClose = () => {
  console.log('beforeClose');
};
let fullscreen = ref(false)
const zoom = () => {
    fullscreen.value = !fullscreen.value
}
</script>

<template>
  <div class="block-box">
    <span>基础使用 </span>
    <u-button @click="toggle">Click to open dialog</u-button>
    <u-dialog
      v-model:visible="visible"
      title="标题"
      width="30vw"
      top="20vh"
      maxHeight="400px"
      :fullscreen="fullscreen"
      :closeOnClickMask="false"
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
        <code>console.log</code>
        <h1>hello</h1>
        <h1>world</h1>
        <h1>kity</h1>
      </template>
      <template v-slot:footer>
        <u-button @click="ok">取 消</u-button>
        <u-button @click="cancel" type="primary">确 定</u-button>
      </template>
    </u-dialog>
  </div>
</template>

<style scoped>
</style>
