<script setup>
import SizeCode from "../demo-code/size-code.vue";
import { sizeCode } from "../demo-code/code.js";
</script>

<template>
  <div class="demo-section">
    <div class="demo-block">
      <SizeCode />
    </div>
    <highlightjs class="code-block" language="javascript xml" :code="sizeCode" />
  </div>
</template>

<style>

</style>
