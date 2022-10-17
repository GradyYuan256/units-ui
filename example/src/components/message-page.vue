<script setup>
import { ref } from "vue";
// import UButton from "../components/button/index.vue";
// import UMessage from "../components/message/index.js";
import {useMessage} from "units-ui";


let message = ref("请休息一会儿");
const msg = useMessage()
const handleClick1 = () => {
  msg({
    message: message.value,
    type: "error",
    onClose: () => {
      console.log("close message");
    },
  });
};

const handleClick2 = () => {
  msg({
    message: "<strong>这是 <i>HTML</i> 片111sasasas1段</strong>",
    type: "success",
    enableHtml: true,
    position: "",
  });
};

const handleClick3 = () => {
  msg({
    message: message.value,
    type: "success",
    position: "left",
  });
};
const handleClick4 = () => {
  msg({
    message: message.value,
    type: "warning",
    position: "center",
  });
};
const handleClick5 = () => {
  msg({
    message: message.value,
    type: "info",
    position: "right",
    onClose: () => {
      console.log("close right message");
    },
  });
};
const handleClick6 = () => {
  msg({
    message: message.value,
    type: "info",
    autoClose: false,
    onClose: () => {
      console.log("close message");
    },
  });
};
const handleClick7 = () => {
  msg({
    message: message.value,
    type: "info",
    autoClose: false,
    customClass: "msg-custom",
    onClose: () => {
      console.log("close custom class message");
    },
  });
};
</script>

<template>
  <div class="block-box">
    <span>基础 Message </span>
    <u-button @click="handleClick1">命令式调用 message</u-button>
    <hr />
    <span>使用 HTML message </span>
    <u-button @click="handleClick2">支持 HTML message</u-button>
    <hr />
    <span>不同位置 message </span>
    <u-button @click="handleClick3">左边 message</u-button>
    <u-button @click="handleClick4">上面的中间 message</u-button>
    <u-button @click="handleClick5">右边 message</u-button>
    <hr />
    <span>手动关闭 message </span>
    <u-button @click="handleClick6">非自动关闭 message</u-button>
    <hr />
    <span>自定义样式 customClass message </span>
    <u-button @click="handleClick7">自定义样式 message</u-button>
  </div>
</template>

<style>
.msg-custom {
  color: white;
  border-color: red;
  background-color: red;
}
</style>
