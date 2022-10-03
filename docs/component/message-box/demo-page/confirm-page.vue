<script setup>
import ConfirmCode from "../demo-code/confirm-code.vue";
import { confirmCode } from "../demo-code/code.js";
</script>

<template>
  <div class="demo-section">
    <div class="demo-block">
      <ConfirmCode />
    </div>
    <highlightjs class="code-block" language="javascript xml" :code="confirmCode" />
  </div>
</template>

<style>

</style>
