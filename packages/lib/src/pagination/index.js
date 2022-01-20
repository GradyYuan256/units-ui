import UPagination from './index.vue'

UPagination.install = (app) => {
  app.component(UPagination.name, UPagination)
  return app
}

export default UPagination
