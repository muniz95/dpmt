import request from 'request-promise'
import { parseStringToHTML } from '../util/html';
import { getResumeData } from './selectors/intellySelector';
const URL = 'http://www.intelly.com.br'

class Intelly{
  // private req: any
  private homePage: any

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
    
    this.homePage = await req.post(options)

    // this.req = req
  }

  public getHome() {
    console.log(getResumeData(parseStringToHTML(this.homePage)))
  }
}

export default Intelly