export const formalCode = `<script setup>
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
`
export const alertCode = `<script setup>
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
`
export const confirmCode = `<script setup>
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
`