const VueCookie = require('vue-cookie')

const state = {
  token: null
}

const getters = {
  isLoggedIn: (state) => {
    if (state.token) {
      return true
    }
    return false
  },
  getJWT: (state) => {
    if (state.token) {
      return state.token
    }
    if (VueCookie.get('JWT')) {
      return VueCookie.get('JWT')
    }
    return null
  }
}

const mutations = {
  setJWT (state, payload) {
    VueCookie.set('JWT', payload, 99)
    state.token = payload
  },
  clearJWT (state, payload) {
    VueCookie.remove('JWT')
    state.token = null
  }
}

const actions = {

}

export default {
  state,
  mutations,
  actions,
  getters
}
