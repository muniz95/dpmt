import request from 'request-promise'
const URL = 'https://www.infojobs.com.br/'

class Infojobs {
  constructor() {
    this._req = null
    this.login = this.login.bind(this)
    this.getCandidate = this.getCandidate.bind(this)
    this.prompt = this.prompt.bind(this)
  }

  async login (email, password) {
    const options = {
      uri: `${URL}/App_WebServices/Ajax/User.asmx/Login`,
      json: {pEmail: email, pPwd: password, pIsRememberChecked: true}
    }
    const req = request.defaults({
      jar: true
    })
    
    await req.post(options)
    // req.post(options)
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err.error))
    console.log('logado')

    this._req = req
  }

  getCandidate () {
    this._req.get(`${URL}/candidate/`)
      .then(res => console.log(res))
  }

  prompt (input) {
    const option = input.toString().trim()
    if (option === '9') process.exit()
    console.log("you entered: [" + option + "]");
    this.getCandidate();
  }
}

export default Infojobs