<script setup>
import { ref } from "vue";

let isLoading = ref(false);
let timer = null;
const handleSpin = () => {
  if (timer) return;
  isLoading.value = true;
  timer = setTimeout(() => {
    isLoading.value = false;
    clearTimeout(timer);
    timer = null;
  }, 2000);
};
</script>
<template>
  <div>
    <u-button @click="handleSpin" circle>
      <u-icon name="refresh" :class="{'is-loading': isLoading}"></u-icon>
    </u-button>
    <u-button type="primary" circle>
      <u-icon name="plus"></u-icon>
    </u-button>
  </div>
</template>

<style scoped>
.is-loading {
  animation: spin 0.6s infinite linear;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
