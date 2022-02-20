<script setup>
import { ref } from 'vue'
// import UButton from "../components/button/index.vue";
// import UButtonGroup from "../components/button-group/index.vue";
// import UIcon from '../components/icon/index.vue'

const handleClick = (e) => {
  console.log("按钮点击事件：", e);
};

let isLoading = ref(false)
let timer = null
const handleSpin = () => {
  if (timer) return
  isLoading.value = true
  timer = setTimeout(() => {
    isLoading.value = false;
    clearTimeout(timer)
    timer = null
  }, 3000)
}
</script>

<template>
  <div class="block-box">
    <span>基础 Button </span>
    <u-button @click="handleClick">Click me</u-button>
    <u-button @click="handleClick" type="primary">Click me</u-button>
    <u-button @click="handleClick" type="info">Click me</u-button>
    <u-button @click="handleClick" type="success">Click me</u-button>
    <u-button @click="handleClick" type="warning">Click me</u-button>
    <u-button @click="handleClick" type="error">Click me</u-button>
    <hr />
    <span>不同尺寸 </span>
    <u-button @click="handleClick">Click me</u-button>
    <u-button @click="handleClick" type="primary" size="medium">Click me</u-button>
    <u-button @click="handleClick" type="info" size="small">Click me</u-button>
    <u-button @click="handleClick" type="success" size="mini">Click me</u-button>
    <u-button @click="handleClick" type="warning" size="medium" round>Click me</u-button>
    <u-button @click="handleClick" type="info" size="small" round disabled="">Click me</u-button>
    <u-button @click="handleClick" type="error" size="mini" round>Click me</u-button>
    <hr />
    <span>禁用 </span>
    <u-button @click="handleClick" disabled>Click me</u-button>
    <u-button @click="handleClick" type="primary" disabled>Click me</u-button>
    <u-button @click="handleClick" type="info" disabled>Click me</u-button>
    <u-button @click="handleClick" type="success" disabled>Click me</u-button>
    <u-button @click="handleClick" type="warning" disabled>Click me</u-button>
    <u-button @click="handleClick" type="error" disabled>Click me</u-button>
    <hr />
    <span>朴素 </span>
    <u-button @click="handleClick" plain>Click me</u-button>
    <u-button @click="handleClick" type="primary" plain>Click me</u-button>
    <u-button @click="handleClick" type="info" plain>Click me</u-button>
    <u-button @click="handleClick" type="success" plain>Click me</u-button>
    <u-button @click="handleClick" type="warning" plain>Click me</u-button>
    <u-button @click="handleClick" type="error" plain>Click me</u-button>
    <hr />
    <span>按钮组 </span>
    <u-button-group>
      <u-button @click="handleClick" plain>Prev</u-button>
      <u-button @click="handleClick" plain>Now</u-button>
      <u-button @click="handleClick" plain>Next</u-button>
    </u-button-group>
    <span>&nbsp;&nbsp;</span>
    <u-button-group>
      <u-button @click="handleClick" type="primary" plain>Click me</u-button>
      <u-button @click="handleClick" type="info" plain>Click me</u-button>
      <u-button @click="handleClick" type="success" plain>Click me</u-button>
      <u-button @click="handleClick" type="warning" plain>Click me</u-button>
      <u-button @click="handleClick" type="error" plain>Click me</u-button>
    </u-button-group>
    <span>&nbsp;&nbsp;</span>
    <u-button-group>
      <u-button @click="handleClick" type="primary">Click me</u-button>
      <u-button @click="handleClick" type="info">Click me</u-button>
      <u-button @click="handleClick" type="success">Click me</u-button>
      <u-button @click="handleClick" type="warning">Click me</u-button>
      <u-button @click="handleClick" type="error">Click me</u-button>
    </u-button-group>
    <hr />
    <span>圆角 </span>
    <u-button @click="handleClick" round>Click me</u-button>
    <u-button @click="handleClick" type="primary" round>Click me</u-button>
    <u-button @click="handleClick" type="info" round>Click me</u-button>
    <u-button @click="handleClick" type="success" round>Click me</u-button>
    <u-button @click="handleClick" type="warning" round>Click me</u-button>
    <u-button @click="handleClick" type="error" round>Click me</u-button>
    <hr>
    <span>圆 </span>
    <u-button @click="handleSpin" circle>
      <u-icon name="refresh" :class="{'is-loading': isLoading}"></u-icon>
    </u-button>
    <u-button @click="handleClick" type="primary" circle>
      <u-icon name="plus"></u-icon>
    </u-button>
    <u-button @click="handleClick" type="info" circle>
      <u-icon name="plus"></u-icon>
    </u-button>
    <u-button @click="handleClick" type="success" circle>
      <u-icon name="plus"></u-icon>
    </u-button>
    <u-button @click="handleClick" type="warning">
      <u-icon name="plus"></u-icon>
    </u-button>
    <u-button @click="handleClick" type="error" circle disabled>
      <u-icon name="plus"></u-icon>
    </u-button>
  </div>
</template>

<style scoped>
.is-loading {
  animation: spin .8s infinite linear;


}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
