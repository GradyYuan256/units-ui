import URadioGroup from './index.vue'

URadioGroup.install = (app) => {
  app.component(URadioGroup.name, URadioGroup)
  return app
}

export default URadioGroup
