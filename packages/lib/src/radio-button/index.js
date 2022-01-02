import URadioButton from './index.vue'

URadioButton.install = (app) => {
  app.component(URadioButton.name, URadioButton)
  return app
}

export default URadioButton
