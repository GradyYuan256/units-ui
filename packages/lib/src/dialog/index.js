import UDialog from './index.vue'

UDialog.install = (app) => {
  app.component(UDialog.name, UDialog)
  return app
}

export default UDialog
