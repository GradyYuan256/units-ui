## 介绍
基于 `Vue 3` 实现的 UI 组件库，代码易读，支持 `ESM` 特性中 `tree shaking` 功能，也可以通过 `CDN` 的方式引入。

*做这个的初心是学习 `Vue 3` ，目前组件数量不多，如果使用中有问题请在 [issue](https://github.com/GradyYuan256/units-ui/issues) 发起😃，当然也欢迎你的无私贡献✨！*

## 使用教程
### pnpm 安装
推荐使用 `pnpm` 的方式安装。
```bash
pnpm add units-ui
```

### npm 安装
```bash
npm add units-ui -S
```

### yarn 安装
```bash
yarn add units-ui
```

### cdn
也可以使用 `cdn` 的方式引入。
```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/units-ui/dist/theme/index.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/units-ui/dist/index.js"></script>
```

### Vue 3 project
```javascript
import { createApp } from 'vue'
import App from './App.vue'

import UnitsUI from 'units-ui'
import 'units-ui/dist/theme/index.css'

const app = createApp(App)
app.use(UnitsUI)
app.mount('#app')
```

## 文档
要查看示例代码和详细的组件文档，请访问[文档](https://gradyyuan256.github.io/units-ui-docs/)。

## LICENSE
[MIT](https://opensource.org/licenses/MIT)
Copyright (c) 2022 GradyYuan256