import request from "request-promise";
const LOGIN_URL = "http://meta.ats.peoplenect.com/cgi-bin/a/viewprofile.cgi";

class Meta {
  private req: any;

  public async login(username: string, password: string) {
    const form = {
      Login: "Log+In",
      password,
      username,
      what2do: "login",
      // Login: 'Enviar'
    };
    const headers = {
      "Content-Type" : "application/x-www-form-urlencoded",
    };
    const options = {
      form,
      headers,
      uri: LOGIN_URL,
    };
    const req = request.defaults({
      jar: true,
    });

    await req.post(options);

    this.req = req;
  }

  public html() {
    return this.req;
  }
}
export default Meta;
