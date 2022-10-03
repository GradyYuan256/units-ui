<script setup>
import ToastCode from "../demo-code/toast-code.vue";
import { toastCode } from "../demo-code/code.js";
</script>

<template>
  <div class="demo-section">
    <div class="demo-block">
      <ToastCode />
    </div>
    <highlightjs class="code-block" language="javascript xml" :code="toastCode" />
  </div>
</template>

<style>

</style>
