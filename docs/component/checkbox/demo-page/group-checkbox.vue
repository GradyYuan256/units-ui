<script setup>
import GroupCode from "../demo-code/group-code.vue";
import { groupCode } from "../demo-code/code.js";
</script>

<template>
  <div class="demo-section">
    <div class="demo-block">
      <GroupCode />
    </div>
    <highlightjs class="code-block" language="javascript xml" :code="groupCode" />
  </div>
</template>

<style>

</style>
