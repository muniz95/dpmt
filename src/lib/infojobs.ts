import request from 'request-promise';
const URL = 'https://www.infojobs.com.br/';

class Infojobs {
  private req: any;

  Infojobs() {
    this.req = null
    this.login = this.login.bind(this)
    this.getCandidate = this.getCandidate.bind(this)
    this.prompt = this.prompt.bind(this)
  }

  async login (email: string, password: string): Promise<void> {
    const options = {
      uri: `${URL}/App_WebServices/Ajax/User.asmx/Login`,
      json: {pEmail: email, pPwd: password, pIsRememberChecked: true}
    }
    const req = request.defaults({
      jar: true
    })
    
    await req.post(options)
    console.log(req)

    this.req = req
  }

  public getCandidate (): void {
    this.req.get(`${URL}/candidate/`)
      .then((res: request.RequestPromise) => console.log(res))
  }

  public prompt (input: string) {
    const option = input.toString().trim()
    if (option === '9') process.exit()
    console.log("you entered: [" + option + "]");
    this.getCandidate();
  }
}

export default Infojobs