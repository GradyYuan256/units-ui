# 快速上手

## 引入 Units UI
### 全量引入
在 `main.js` 文件中写入：
```javascript
import { createApp } from 'vue'
import UnitsUI from 'units-ui'
import 'units-ui/dist/theme/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(UnitsUI)
app.mount('#app')
```

### 手动导入
```vue
<script setup>
  import { UButton } from 'element-plus'
</script>

<template>
  <u-button>I am UButton</el-button>
</template>
```