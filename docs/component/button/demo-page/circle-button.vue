<script setup>
import CircleCode from "../demo-code/circle-code.vue";
import { circleCode } from "../demo-code/code.js";
</script>

<template>
  <div class="demo-section">
    <div class="demo-block">
      <CircleCode />
    </div>
    <highlightjs class="code-block" language="javascript xml" :code="circleCode" />
  </div>
</template>

<style>

</style>
