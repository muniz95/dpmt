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
      'Accept': 'text / html, application/xhtml+xml,application/xml; q=0.9, */*;q=0.8',
      'Accept-Encoding': 'binary',
      'Accept-Language': 'pt-BR,pt;q=0.8,en-US;q=0.6,en;q=0.4,eo;q=0.2',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Host': 'www.intelly.com.br',
      'Referer': 'http://www.intelly.com.br/Extranet/loginCandidatoCad.do',
      'Upgrade-Insecure-Requests': '1',
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:59.0) Gecko/20100101 Firefox/59.0'
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