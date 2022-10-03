<script setup>
import { useMessageBox } from "units-ui";

const messageBox = useMessageBox();
const handleClick = () => {
  messageBox
    .alert({
      confirmBtnText: "确定",
      cancelBtnText: "取消",
      title: "弹框提示",
      content: "赶紧休息睡觉",
    })
    .then(() => {
      console.log("alert ok");
    })
    .catch(() => {
      console.log("alert cancel");
    });
};
</script>

<template>
  <div>
    <u-button @click="handleClick">alert</u-button>
  </div>
</template>