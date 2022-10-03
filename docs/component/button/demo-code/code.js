export const formalCode = `<template>
  <div>
    <u-button>默认按钮</u-button>
    <u-button type="primary">主要按钮</u-button>
    <u-button type="info">信息按钮</u-button>
    <u-button type="success">成功按钮</u-button>
    <u-button type="warning">警告按钮</u-button>
    <u-button type="error">错误按钮</u-button>
  </div>
</template>
`

export const sizeCode = `<template>
  <div>
    <u-button>默认按钮</u-button>
    <u-button type="primary" size="medium">主要按钮</u-button>
    <u-button type="info" size="small">信息按钮</u-button>
    <u-button type="success" size="mini">成功按钮</u-button>
  </div>
</template>
`

export const plainCode = `<template>
  <div>
    <u-button plain>默认按钮</u-button>
    <u-button type="primary" plain>主要按钮</u-button>
    <u-button type="info" plain>信息按钮</u-button>
    <u-button type="success" plain>成功按钮</u-button>
    <u-button type="warning" plain>警告按钮</u-button>
    <u-button type="error" plain>错误按钮</u-button>
  </div>
</template>
`

export const disabledCode = `<template>
  <div>
    <u-button disabled>默认按钮</u-button>
    <u-button type="primary" disabled>主要按钮</u-button>
    <u-button type="info" disabled>信息按钮</u-button>
    <u-button type="success" disabled>成功按钮</u-button>
    <u-button type="warning" disabled>警告按钮</u-button>
    <u-button type="error" disabled>错误按钮</u-button>
  </div>
</template>
`

export const roundCode = `<template>
  <div>
    <u-button round>默认按钮</u-button>
    <u-button type="primary" round>主要按钮</u-button>
    <u-button type="info" round>信息按钮</u-button>
    <u-button type="success" round>成功按钮</u-button>
    <u-button type="warning" round>警告按钮</u-button>
    <u-button type="error" round>错误按钮</u-button>
  </div>
</template>
`
export const circleCode = `<script setup>
import { ref } from "vue";

let isLoading = ref(false);
let timer = null;
const handleSpin = () => {
  if (timer) return;
  isLoading.value = true;
  timer = setTimeout(() => {
    isLoading.value = false;
    clearTimeout(timer);
    timer = null;
  }, 2000);
};
</script>
<template>
  <div>
    <u-button @click="handleSpin" circle>
      <u-icon name="refresh" :class="{'is-loading': isLoading}"></u-icon>
    </u-button>
    <u-button type="primary" circle>
      <u-icon name="plus"></u-icon>
    </u-button>
  </div>
</template>

<style scoped>
.is-loading {
  animation: spin 0.6s infinite linear;
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
`

export const groupCode = `<script setup>
const handleClick = () => {
  alert('Welcome to Units UI!')
}
</script>
<template>
  <div>
    <u-button-group>
      <u-button plain>Prev</u-button>
      <u-button plain>Now</u-button>
      <u-button plain>Next</u-button>
    </u-button-group>
    <p></p>
    <u-button-group>
      <u-button @click="handleClick" type="primary" plain>Click me</u-button>
      <u-button @click="handleClick" type="info" plain>Click me</u-button>
      <u-button @click="handleClick" type="success" plain>Click me</u-button>
      <u-button @click="handleClick" type="warning" plain>Click me</u-button>
      <u-button @click="handleClick" type="error" plain>Click me</u-button>
    </u-button-group>
    <p></p>
    <u-button-group>
      <u-button @click="handleClick" type="primary">Click me</u-button>
      <u-button @click="handleClick" type="info">Click me</u-button>
      <u-button @click="handleClick" type="success">Click me</u-button>
      <u-button @click="handleClick" type="warning">Click me</u-button>
      <u-button @click="handleClick" type="error">Click me</u-button>
    </u-button-group>
  </div>
</template>
`
