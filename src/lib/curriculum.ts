import request from 'request-promise'
const URL = ''
// const LOGIN_URL = 'https://login.ucn.com.br/Login.aspx'

class Curriculum {
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

  public request() {
    return this.req
  }
}

export default Curriculum