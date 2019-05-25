import request from "request-promise";
const URL = "";
// const LOGIN_URL = 'https://login.ucn.com.br/Login.aspx'

class Curriculum {
  private req: any;

  public async login(username: string, password: string) {
    const headers = {
      "Content-Type" : "application/x-www-form-urlencoded",
    };

    const options = {
      followAllRedirects: true,
      followRedirects: true,
      form: {
        "authenticity_token": "",
        "commit": "Entrar",
        "login_candidatos_form[senha]": password,
        "login_candidatos_form[usuario]": username,
        "utf8": true,
      },
      headers,
      uri: `${URL}/login-candidatos`,
    };

    const req = request.defaults({
      jar: true,
    });

    await req.post(options);

    this.req = req;
  }

  public request() {
    return this.req;
  }
}

export default Curriculum;
