import axios from 'axios'
axios.defaults.baseURL = 'https://localhost:8080/api'

const API = {
  get: (url, payload) => {
    return new Promise(function (resolve, reject) {
      axios.get(url, payload).then((data) => {
        resolve(data)
      }).catch((error) => {
        reject(error)
      })
    })
  },
  post: (url, payload) => {
    return new Promise(function (resolve, reject) {
      axios.post(url, payload).then((data) => {
        resolve(data)
      }).catch((error) => {
        reject(error)
      })
    })
  }
}
export default {
  API
}
