<script setup>
import { ref } from "vue";
// import UButton from "../components/button/index.vue";
// import UToast from "../components/toast/index.js";
import {useToast} from "units-ui";

let message = ref("请休息一会儿");
const toast = useToast()
const handleClick1 = () => {
  console.log(useToast)
  toast({
    message: message.value,
    duration: 3000,
  });
};

const handleClick2 = () => {
  toast({
    message: '<span style="color:#010101;">hello</span>',
    type: "success",
    enableHtml: true,
  });
};
</script>

<template>
  <div class="block-box">
    <span>基础 Toast </span>
    <u-button @click="handleClick1">命令式调用 toast</u-button>
    <hr />
    <span>主题色 Toast </span>
    <u-button @click="handleClick2">命令式调用 toast</u-button>
  </div>
</template>

