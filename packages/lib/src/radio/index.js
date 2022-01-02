import URadio from './index.vue'

URadio.install = (app) => {
  app.component(URadio.name, URadio)
  return app
}

export default URadio
