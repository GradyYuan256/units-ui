import UButton from './index.vue'

UButton.install = (app) => {
  app.component(UButton.name, UButton)
  return app
}

export default UButton
