<script setup>
import SquareCode from "../demo-code/square-code.vue";
import { squareCode } from "../demo-code/code.js";
</script>

<template>
  <div class="demo-section">
    <div class="demo-block">
      <SquareCode />
    </div>
    <highlightjs class="code-block" language="javascript xml" :code="squareCode" />
  </div>
</template>

<style>

</style>
