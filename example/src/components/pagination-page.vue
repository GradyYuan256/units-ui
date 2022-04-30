<script setup>
import { ref, watch } from "vue";
// import UPagination from "../components/pagination/index.vue";

let currentPage = ref(2)
const gotoPage = (n) => {
  console.log('change --> ', n);
}
watch(() => currentPage.value, (newV) => {
  console.log('watch page number --> ', newV);
})
</script>

<template>
  <div class="block-box">
    <span>基础分页 </span>
    <u-pagination :total="10" v-model:currentPage="currentPage" @change="gotoPage"></u-pagination>
    <hr>
    
  </div>
</template>
