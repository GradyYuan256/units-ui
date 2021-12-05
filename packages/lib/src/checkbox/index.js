import UCheckbox from './index.vue'

UCheckbox.install = (app) => {
  app.component(UCheckbox.name, UCheckbox)
  return app
}

export default UCheckbox
