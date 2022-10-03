import DefaultTheme from 'vitepress/theme'
import UnitsUI from 'units-ui'
import 'units-ui/dist/theme/index.css'
import './common.css' // 给代码块自定义样式
import hljs from 'highlight.js'
import 'highlight.js/styles/idea.css'
import javascript from 'highlight.js/lib/languages/javascript';
import hljsVuePlugin from "@highlightjs/vue-plugin/dist/highlightjs-vue.esm.min.js";
hljs.registerLanguage('javascript', javascript);

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
      // console.log(UnitsUI)
      app.use(UnitsUI)
      // if(import.meta.env.MODE === 'development') {
      //   app.use(UnitsUI)
      // } else {
      //   // 生产环境使用动态加载，防止 build 时报错
      //   app.count = 0
      //   app.mixin({
      //     mounted() {
      //       import('units-ui').then(function (m) {
      //         app.count ++
      //         if(app.count < 2) {
      //           app.use(m.default)
      //         }
      //       })
      //     },
      //   })
      // }
      app.use(hljsVuePlugin);
    },
}