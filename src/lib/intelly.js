// const axios = require('axios')
// const axiosCookieJarSupport = require('axios-cookiejar-support').default
// const tough = require('tough-cookie')
const request = require('request-promise')
const querystring = require('querystring')
const URL = 'http://www.intelly.com.br'
// const jar = new tough.CookieJar()

const login = async (email, password) => {
  const form = {
    loginCad: true,
    tipoFonte: '',
    corFonte: '555d71',
    tamFonte: 11,
    tipoFonteTitulo: 'arial',
    corFonteTitulo: 'FF9966',
    tamFonteTitulo: '11',
    tipoFonteSubTitulo: '',
    corFonteSubTitulo: 'FF9966',
    tamFonteSubTitulo: 11,
    login: email,
    senha: password
  }
  
  const headers = { 
    'Content-Type' : 'application/x-www-form-urlencoded' 
  }
  
  const options = {
    uri: `${URL}/Extranet/loginCandidato.do`,
    form,
    headers
  }
  
  const req = request.defaults({
    jar: true
  })
  
  
  await req.post(options)
  // req.post(options)
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err))

  return req
}

// const get

export default {
  login
}