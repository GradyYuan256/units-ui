<script setup>
import DialogPage from './demo-page/dialog.vue'
</script>

# Dialog 对话框

## 基本用法
<ClientOnly>
  <DialogPage />
</ClientOnly>

## 文档说明
### Attributes

| 参数             | 说明                                       | 类型    |
| ---------------- | ------------------------------------------ | ------- |
| v-model:visible  | 是否显示 Dialog                            | boolean |
| title            | Dialog 的标题，也可通过具名 slot 传入      | -       |
| width            | Dialog 的宽度，支持 px \| % \| vw          | string  |
| fullscreen       | 是否为全屏 Dialog                          | boolean |
| top              | Dialog CSS 中的 top 值，支持 px \| % \| vh | string  |
| closeOnClickMask | 是否可以通过点击蒙层关闭 Dialog            | boolean |
| maxHeight        | Dialog 最大高度，支持 px \| % \| vh        | string  |
| showClose        | 是否显示 Dialog 关闭按钮                   | boolean |

### Slot

| 插槽名  | 说明                    |
| ------- | ----------------------- |
| title   | Dialog 头部标题区的内容 |
| content | Dialog 内容区的内容     |
| footer  | Dialog 底部按钮的内容   |

### Events

| 事件名      | 说明                      |
| ----------- | ------------------------- |
| ok          | Dialog 点击确认按钮的回调 |
| cencel      | Dialog 点击取消按钮的回调 |
| beforeClose | Dialog 关闭前的回调       |

