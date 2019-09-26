import base from '../baseRepo'

const auth = {
  login: (logindata) => {
    console.log(base)
    // Instead of actually calling an API just spoof a response
    return new Promise(function (resolve, reject) {
      resolve(true)
    })
    // uncomment below to call the api
    // return base.API.post('/Auth/authenticate', logindata)
  }
}

export default {
  auth
}
