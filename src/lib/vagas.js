import request from 'request-promise'
const URL = 'https://www.vagas.com.br'

const login = async (username, password) => {
  const headers = { 
    'Content-Type' : 'application/x-www-form-urlencoded' 
  }
  
  const options = {
    uri: `${URL}/login-candidatos`,
    form: {
      utf8: true,
      authenticity_token: '',
      'login_candidatos_form[usuario]': username,
      'login_candidatos_form[senha]': password,
      commit: 'Entrar'
    },
    headers,
    followRedirects: true,
    followAllRedirects: true
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

const getServices = (username, password) => {
  login(username, password).then(req => {
    req.get(`${URL}/servicos`)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  })
}

const getCandidateHistory = (username, password) => {
  login(username, password).then(req => {
    req.get(`${URL}/_HistCand2.asp`)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  })
}

export default {
  login,
  getServices,
  getCandidateHistory
}