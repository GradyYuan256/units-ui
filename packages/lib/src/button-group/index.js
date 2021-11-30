import UButtonGroup from './index.vue'

UButtonGroup.install = (app) => {
  app.component(UButtonGroup.name, UButtonGroup)
  return app
}

export default UButtonGroup
