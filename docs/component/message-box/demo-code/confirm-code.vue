<script setup>
import { useMessageBox } from "units-ui";

const messageBox = useMessageBox();
const handleClick = () => {
  messageBox
    .confirm({
      showCancelBtn: true,
      cancelBtnText: "取消",
      title: "弹框提示",
      content: "请休息一会儿",
    })
    .then(() => {
      console.log("confirm ok");
    })
    .catch(() => {
      console.log("confirm cancel");
    });
};
</script>

<template>
  <div>
    <u-button @click="handleClick">confirm</u-button>
  </div>
</template>