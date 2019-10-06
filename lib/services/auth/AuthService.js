import authRepo from '../../repo/Auth/AuthRepo.js'
const Store = require('../../store/store')
export default {
  login: (logindata) => {
    return new Promise(function (resolve, reject) {
      authRepo.auth.login(logindata).then((data) => {
        // eslint-disable-next-line no-console
        console.log(data)
        Store.default.commit('setJWT', data)
        resolve(Store.default.getters.isLoggedIn)
      }).catch((error) => {
        reject(error)
      })
    })
  },
  isLoggedIn: () => {
    return Store.default.getters.isLoggedIn
  },
  getUserModules: () => {
    return new Promise(function (resolve, reject) {
      const modules = [{ name: 'component A', path: 'componentA/componentA.vue' }, { name: 'component b', path: 'componentB/componentB.vue' }]
      resolve(modules)
    })
  }
}
