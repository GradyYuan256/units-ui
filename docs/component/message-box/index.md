<script setup>
import FormalPage from './demo-page/formal-page.vue'
import AlertPage from './demo-page/alert-page.vue'
import ConfirmPage from './demo-page/confirm-page.vue'
</script>

# Message 消息提示

## 基本用法
`title` 为弹框标题；`content` 为弹框内容；`enableHtml` 是否支持 `html` 片段；`showCancelBtn` 展示或隐藏取消按钮，默认隐藏；`confirmBtnText` 为确认按钮文本；`cancelBtnText` 为取消按钮文本；`closeOnClickMask` 为是否通过点击蒙层关闭弹框。
<ClientOnly>
  <FormalPage />
</ClientOnly>

## Alert 消息弹框
可以这样使用 `useMessage().alert(options)`。
<ClientOnly>
  <AlertPage />
</ClientOnly>

## Confirm 消息弹框
也可以这样使用 `useMessage().confirm(options)`。
<ClientOnly>
  <ConfirmPage />
</ClientOnly>