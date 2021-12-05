import UCheckboxGroup from './index.vue'

UCheckboxGroup.install = (app) => {
  app.component(UCheckboxGroup.name, UCheckboxGroup)
  return app
}

export default UCheckboxGroup
