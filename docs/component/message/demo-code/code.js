export const formalCode = `<script setup>
import { ref } from "vue";
import { useMessage } from "units-ui";

let message = ref("请休息一会儿");
const msg = useMessage();
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
    message: "<strong>这是 <i>HTML</i> 片段</strong>",
    type: "success",
    enableHtml: true,
  });
};

const handleClick3 = () => {
  msg({
    message: message.value,
    type: "info",
    autoClose: false,
    onClose: () => {
      console.log("close message");
    },
  });
};

const handleClick4 = () => {
  msg({
    message: message.value,
    autoClose: false,
    customClass: "msg-custom",
    onClose: () => {
      console.log("close custom class message");
    },
  });
};
</script>

<template>
  <div>
    <u-button @click="handleClick1">命令式调用</u-button>
    <u-button @click="handleClick2">支持 HTML</u-button>
    <u-button @click="handleClick3">非自动关闭</u-button>
    <u-button @click="handleClick4">自定义样式</u-button>
  </div>
</template>

<style>
.msg-custom {
  color: white;
  border-color: red;
  background-color: red;
}
</style>
`

export const positionCode = `<script setup>
import { ref } from "vue";
import {useMessage} from "units-ui";

let message = ref("请休息一会儿");
const msg = useMessage()
const handleClick1 = () => {
  msg({
    message: message.value,
    type: "success",
    position: "left",
  });
};
const handleClick2 = () => {
  msg({
    message: message.value,
    type: "warning",
    position: "center",
  });
};
const handleClick3 = () => {
  msg({
    message: message.value,
    type: "info",
    position: "right",
    onClose: () => {
      console.log("close right message");
    },
  });
};
</script>
<template>
  <div>
    <u-button @click="handleClick1">左边</u-button>
    <u-button @click="handleClick2">上面的中间</u-button>
    <u-button @click="handleClick3">右边</u-button>
  </div>
</template>
`