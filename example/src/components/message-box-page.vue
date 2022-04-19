<script setup>
// import { ref } from "vue";
// import UButton from "../components/button/index.vue";
// import UMessageBox from "../components/message-box/index.js";
import {useMessageBox} from "units-ui";

const messageBox = useMessageBox()
const handleClick1 = () => {
    messageBox({
        confirmBtnText: '确定',
        title: 'Warning',
        content: '请休息一会儿',
        closeOnClickMask: false
    })
    .then(() => {
        console.log('ok');
    })
    .catch(() => {
        console.log('cancel');
    })
};

const handleClick2 = () => {
    messageBox.confirm({
        showCancelBtn: true,
        cancelBtnText: '取消',
        title: 'Warning',
        content: '请休息一会儿'
    })
    .then(() => {
        console.log('confirm ok');
    })
    .catch(() => {
        console.log('confirm cancel');
    })
};

const handleClick3 = () => {
    messageBox.alert({
        confirmBtnText: '确定',
        cancelBtnText: '取消',
        title: 'Warning',
        content: '赶紧休息睡觉'
    })
    .then(() => {
        console.log('alert ok');
    })
    .catch(() => {
        console.log('alert cancel');
    })
};

</script>

<template>
  <div class="block-box">
    <span>基础 MessageBox </span>
    <u-button @click="handleClick1">命令式调用 message box</u-button>
    <hr>
    <span>消息提示 MessageBox </span>
    <u-button @click="handleClick3">命令式调用 alert message box</u-button>
    <hr>
    <span>确认消息 MessageBox </span>
    <u-button @click="handleClick2">命令式调用 confirm message box</u-button>
    <hr />
    
  </div>
</template>

