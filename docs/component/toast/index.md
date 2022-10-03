<script setup>
import ToastPage from './demo-page/toast.vue'
</script>

# Toast 提示

## 基本用法
支持 `type` 设置 `primary | info | success | warning | error`，`enableHtml` 是否支持传入 `html` 片段，`message` 字段是展示消息的内容，`duration` 字段是展示时长。
<ClientOnly>
  <ToastPage />
</ClientOnly>