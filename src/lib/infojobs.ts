import request from "request-promise";
import "../util/html";
import { parseStringToHTML } from "../util/html";
import { selectJobApplications } from "./selectors/infojobsSelector";

const URL = "https://www.infojobs.com.br/";

class Infojobs {
  private req: any;

  public Infojobs() {
    this.req = null;
  }

  public async login(email: string, password: string): Promise<void> {
    const options = {
      json: {pEmail: email, pPwd: password, pIsRememberChecked: true},
      uri: `${URL}/App_WebServices/Ajax/User.asmx/Login`,
    };
    const req = request.defaults({
      jar: true,
    });

    await req.post(options);

    this.req = req;
  }

  public getCandidate = (): void => {
    this.req.get(`${URL}/candidate/`)
      .then((res: any) => console.log(parseStringToHTML(res)));
  }

  public getJobApplications = (): void => {
    this.req.get(`${URL}/Candidate/Match/List.aspx`)
      .then((res: any) => selectJobApplications(parseStringToHTML(res)));
  }

  public prompt = (input: string) => {
    console.log("ESCOLHA\n\n");
    const option = input.toString().trim();
    if (option === "9") { process.exit(); }
    this.getJobApplications();
  }
}

export default Infojobs;
