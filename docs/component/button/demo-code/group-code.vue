<script setup>
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