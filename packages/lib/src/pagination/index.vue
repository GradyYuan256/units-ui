<script>
export default {
  name: "UPagination",
};
</script>

<script setup>
import { computed } from "vue";
import UIcon from "../icon/index.vue";

const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
  currentPage: {
    type: Number,
    required: true,
  },
  hideIfOnePage: {
    type: Boolean,
    default: false,
  },
  change: {
    type: Function,
  },
});

const pages = computed(() => {
  let pageList = [
    1,
    props.total,
    props.currentPage,
    props.currentPage - 1,
    props.currentPage - 2,
    props.currentPage + 1,
    props.currentPage + 2,
  ];
  pageList = pageList
    .filter((n) => n >= 1 && n <= props.total)
    .sort((a, b) => a - b);
  return [...new Set(pageList)].reduce((prev, current, index, array) => {
    prev.push(current);
    array[index + 1] !== undefined &&
      array[index + 1] - array[index] > 1 &&
      prev.push("...");
    return prev;
  }, []);
});

const emits = defineEmits(["update:currentPage", "change"]);
const onClickPage = (n) => {
  if (n >= 1 && n <= props.total) {
    emits("update:currentPage", n);
    emits("change", n);
  }
};
</script>

<template>
  <div class="u-pagination" v-show="!(hideIfOnePage === true && total <= 1)">
    <span
      class="u-pagination__nav u-prev"
      :class="{ 'is-disabled': currentPage === 1 }"
      @click="onClickPage(currentPage - 1)"
    >
      <u-icon name="arrow-left"></u-icon>
    </span>
    <template v-for="page in pages" :key="'pagination-' + page">
      <template v-if="page === currentPage">
        <span class="u-pagination__item is-current">{{ page }}</span>
      </template>
      <template v-else-if="page === '...'">
        <u-icon class="u-pagination__separator" name="dots-3"></u-icon>
      </template>
      <template v-else>
        <span class="u-pagination__item is-other" @click="onClickPage(page)">{{
          page
        }}</span>
      </template>
    </template>
    <span
      class="u-pagination__nav u-next"
      :class="{ 'is-disabled': currentPage === total }"
      @click="onClickPage(currentPage + 1)"
    >
      <u-icon name="arrow-right"></u-icon>
    </span>
  </div>
</template>

<style lang="less">
@import "./index.less";
</style>
