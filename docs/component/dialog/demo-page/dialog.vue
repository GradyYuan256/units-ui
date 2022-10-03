<script setup>
import DialogCode from "../demo-code/dialog-code.vue";
import { dialogCode } from "../demo-code/code.js";
</script>

<template>
  <div class="demo-section">
    <div class="demo-block">
      <DialogCode />
    </div>
    <highlightjs class="code-block" language="javascript xml" :code="dialogCode" />
  </div>
</template>

<style>

</style>
