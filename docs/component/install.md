# 安装


## pnpm 安装
推荐使用 `pnpm` 的方式安装。
```bash
pnpm add units-ui
```

## npm 安装
```bash
npm add units-ui -S
```

## yarn 安装
```bash
yarn add units-ui
```

## CDN
也可以使用 CDN 的方式引入。
```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/units-ui/lib/theme/index.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/units-ui/lib/index.umd.js"></script>
```
## 快速演示
通过 CDN 的方式可以快速写出一个 `demo` 。
```html
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <script src="https://unpkg.com/vue@3.2.25"></script>
    <!-- import CSS -->
    <link rel="stylesheet" href="https://unpkg.com/units-ui/lib/theme/index.css">
    <!-- import JavaScript -->
    <script src="https://unpkg.com/units-ui/lib/index.umd.js"></script>
    <title>Units UI demo</title>
  </head>
  <body>
    <div id="app">
      <u-button>{{ message }}</u-button>
    </div>
    <script>
      const App = {
        data() {
          return {
            message: "Hello Units UI",
          };
        },
      };
      const app = Vue.createApp(App);
      app.use(UnitsUI);
      app.mount("#app");
    </script>
  </body>
</html>
```