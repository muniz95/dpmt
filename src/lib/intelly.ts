import request from 'request-promise'
const URL = 'http://www.intelly.com.br'

class Intelly{
  private req: any

  Intelly() {
    this.req = null
  }

  public async login (email: string, password: string) {
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

    this.req = req
  }

  public request() {
    return this.req
  }
}

export default Intelly