import request from 'request-promise'
const URL = 'https://www.vagas.com.br'

class Vagas {
  private req: any

  public async login (username: string, password: string) {
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
    
    this.req = req
  }
  
  public getServices () {
    this.req.get(`${URL}/servicos`)
    .then((res: any) => console.log(res))
    .catch((err: any) => console.log(err))
  }
  
  public getCandidateHistory () {
    this.req.get(`${URL}/_HistCand2.asp`)
    .then((res: any) => console.log(res))
    .catch((err: any) => console.log(err))
  }
}
  
export default Vagas