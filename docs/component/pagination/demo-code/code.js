export const paginationCode = `<script setup>
import { ref, watch } from "vue";

let currentPage = ref(2);
let totalPage = ref(10);
const changePage = (n) => {
  console.log("change --> ", n);
};
watch(
  () => currentPage.value,
  (newV) => {
    console.log("watch page number --> ", newV);
  }
);
</script>

<template>
  <div>
    <u-pagination
      :total="totalPage"
      v-model:currentPage="currentPage"
      @change="changePage"
    ></u-pagination>
  </div>
</template>
`