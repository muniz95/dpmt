const request = require('request-promise')
const URL = 'https://www.infojobs.com.br/'

const login = async (email, password) => {
  const options = {
    uri: `${URL}/App_WebServices/Ajax/User.asmx/Login`,
    json: {pEmail: email, pPwd: password, pIsRememberChecked: true}
  }
  const req = request.defaults({
    jar: true
  })
  
  await req.post(options)
  // req.post(options)
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err.error))

  return req
}

const getCandidate = (email, password) => {
  login(email, password)
    .then(req => {
      req.get(`${URL}/candidate/`)
        .then(res => console.log(res))
    })
}

export default {
  login,
  getCandidate
}