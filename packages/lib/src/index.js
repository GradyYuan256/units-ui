import * as components from './components.js'
export * from './components.js'

export default {
  install(app) {
    for (const component in components) {
      const Comp = components[component]
      if (Comp.install)
        app.use(Comp)
    }
    return app
  },
}
