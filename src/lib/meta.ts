import request from 'request-promise'
const LOGIN_URL = 'http://meta.ats.peoplenect.com/cgi-bin/a/viewprofile.cgi'

class Meta {
  private req: any

  public async login (username: string, password: string) {
    const form = {
      username,
      password,
      what2do: 'login',
      Login: 'Log+In',
      // Login: 'Enviar'
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
    
    await req.post(options)

    this.req = req
  }

  public html() {
    return this.req
  }
}
export default Meta