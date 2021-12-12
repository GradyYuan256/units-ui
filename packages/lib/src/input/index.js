import UInput from './index.vue'

UInput.install = (app) => {
  app.component(UInput.name, UInput)
  return app
}

export default UInput
