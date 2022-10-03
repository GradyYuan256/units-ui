<script setup>
import MessagePage from './demo-page/formal-page.vue'
import PositionPage from './demo-page/position-page.vue'
</script>

# Message 消息提示

## 基本用法
通过 `type` 设置不同的主题，对应的值有 `primary | info | success | warning | error`；`message` 为消息内容；`enableHtml` 允许 `message` 为 `html` 片段；`autoClose` 字段为是否自动关闭；`customClass` 为自定义类名，可以设置不一样的样式；`onClose` 监听关闭时的回调函数。
<ClientOnly>
  <MessagePage />
</ClientOnly>

## 不同位置
`position` 有三种值 `left | center | right`。
<ClientOnly>
  <PositionPage />
</ClientOnly>