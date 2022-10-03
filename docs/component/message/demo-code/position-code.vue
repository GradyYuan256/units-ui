<script setup>
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