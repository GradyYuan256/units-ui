<script setup>
import {useMessageBox} from "units-ui";

const messageBox = useMessageBox()
const handleClick = () => {
    messageBox({
        confirmBtnText: '确定',
        title: '弹框提示',
        enableHtml: true,
        content: '这是<i>html</i>片段',
        closeOnClickMask: false
    })
    .then(() => {
        console.log('ok');
    })
    .catch(() => {
        console.log('cancel');
    })
};
</script>

<template>
  <div>
    <u-button @click="handleClick">命令式调用</u-button>
  </div>
</template>