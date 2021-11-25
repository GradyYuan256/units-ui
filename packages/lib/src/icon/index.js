import UIcon from './index.vue'

UIcon.install = (app) => {
  app.component(UIcon.name, UIcon)
  return app
}

export default UIcon
