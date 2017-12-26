const axios = require('axios')
const axiosCookieJarSupport = require('axios-cookiejar-support').default;
const tough = require('tough-cookie');
const URL = 'http://www.intelly.com.br'
const jar = new tough.CookieJar();

const login = (email, password) => {
  const dataGet = {
    'tipoFonte': 'arial',
    'corFonte': '555d71',
    'tamFonte': 11,
    'tipoFonteTitulo': 'arial',
    'corFonteTitulo': 'FF9966',
    'tamFonteTitulo': 11,
    'tipoFonteSubTitulo': 'arial',
    'corFonteSubTitulo': 'FF9966',
    'tamFonteSubTitulo': 11,
  }
  const dataPost = {
    loginCad: true,
    tipoFonte: '',
    corFonte: '555d71',
    tamFonte: 11,
    tipoFonteTitulo: 'arial',
    corFonteTitulo: 'FF9966',
    tamFonteTitulo: '11',
    tipoFonteSubTitulo: '',
    corFonteSubTitulo: 'FF9966',
    tamFonteSubTitulo: 11
  }
  
  const authPost = {
    login: email,
    senha: password
  }
  
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  axiosCookieJarSupport(axios);
  const instance = axios.create({
    baseURL: URL,
    headers,
    jar,
    withCredentials: true
  })
  
  instance.get(`/Extranet/loginCandidatoCad.do`, {params: dataGet})
    .then(res => console.log(res.data))
    .catch(err => console.error(err))
  
  instance.post(`/Extranet/loginCandidato.do`, {
    data: dataPost,
    auth: authPost
  })
    .then(res => console.log(res))
    .catch(err => {
      console.error(err.response.data)
    })
}

export default {
  login
}