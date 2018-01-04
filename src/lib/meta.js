const request = require('request-promise')
const LOGIN_URL = 'http://meta.ats.peoplenect.com/cgi-bin/a/viewprofile.cgi'

const login = (username, password) => {
  const form = {
    username,
    password,
    what2do: 'login',
    Login: 'Log+In',
    Login: 'Enviar'
  }
  const headers = { 
    'Content-Type' : 'application/x-www-form-urlencoded' 
  }
  const options = {
    uri: LOGIN_URL,
    form,
    headers
  }
  const req = request.defaults({
    jar: true
  })
  
  // await req.post(options)
  req.post(options)
    .then(res => console.log(res))
    .catch(err => console.log(err.error))

  return req
}

export default {
  login
}