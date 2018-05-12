import request from 'request-promise';
const URL = 'https://www.infojobs.com.br/';

class Infojobs {
  private req: any;

  Infojobs() {
    this.req = null
  }

  public async login (email: string, password: string): Promise<void> {
    const options = {
      uri: `${URL}/App_WebServices/Ajax/User.asmx/Login`,
      json: {pEmail: email, pPwd: password, pIsRememberChecked: true}
    }
    const req = request.defaults({
      jar: true
    })
    
    await req.post(options)

    this.req = req
  }

  public getCandidate = (): void => {
    this.req.get(`${URL}/candidate/`)
      .then((res: any) => console.log(res))
  }

  public prompt = (input: string) => {
    console.log("ESCOLHA\n\n");
    const option = input.toString().trim()
    if (option === '9') process.exit()
    this.getCandidate();
  }
}

export default Infojobs