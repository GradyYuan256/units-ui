import USwitch from './index.vue'

USwitch.install = (app) => {
  app.component(USwitch.name, USwitch)
  return app
}

export default USwitch
