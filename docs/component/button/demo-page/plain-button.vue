<script setup>
import PlainCode from "../demo-code/plain-code.vue";
import { plainCode } from "../demo-code/code.js";
</script>

<template>
  <div class="demo-section">
    <div class="demo-block">
      <PlainCode />
    </div>
    <highlightjs class="code-block" language="javascript xml" :code="plainCode" />
  </div>
</template>

<style>

</style>
