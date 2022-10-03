<script setup>
import PaginationPage from './demo-page/pagination.vue'
</script>

# Message 消息提示

## 基本用法
`v-model:currentPage` 绑定当前页；`total` 是总页数；`@change` 监听分页器的变化。
<ClientOnly>
  <PaginationPage />
</ClientOnly>
