<script setup>
import { ref } from "vue";
import { useToast } from "units-ui";

let message = ref("请休息一会儿");
const toast = useToast()
const handleClick1 = () => {
  toast({
    message: message.value,
    duration: 3000,
  });
};

const handleClick2 = () => {
  toast({
    message: '<span style="color: gold;"><i>hello</i></span>',
    type: 'warning',
    enableHtml: true,
  });
};
</script>
<template>
  <div>
    <u-button @click="handleClick1">命令式调用 toast</u-button>
    <u-button @click="handleClick2">支持传入 html</u-button>
  </div>
</template>