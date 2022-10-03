<script setup>
import PositionCode from "../demo-code/position-code.vue";
import { positionCode } from "../demo-code/code.js";
</script>

<template>
  <div class="demo-section">
    <div class="demo-block">
      <PositionCode />
    </div>
    <highlightjs class="code-block" language="javascript xml" :code="positionCode" />
  </div>
</template>

<style>

</style>
