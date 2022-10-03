<script setup>
import FormalCode from "../demo-code/formal-code.vue";
import { formalCode } from "../demo-code/code.js";
</script>

<template>
  <div class="demo-section">
    <div class="demo-block">
      <FormalCode />
    </div>
    <highlightjs class="code-block" language="javascript xml" :code="formalCode" />
  </div>
</template>

<style>

</style>
