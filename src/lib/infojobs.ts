import chalk from "chalk";
import { RequestAPI, RequiredUriUrl } from "request";
import rp from "request-promise";
import "../util/html";
import { parseStringToHTML } from "../util/html";
import { selectJobApplications } from "./selectors/infojobsSelector";

const URL = "https://www.infojobs.com.br/";

class Infojobs {
  private req!: RequestAPI<rp.RequestPromise, rp.RequestPromiseOptions, RequiredUriUrl>;

  public Infojobs() {
    return this;
  }

  public async login(email: string, password: string): Promise<Infojobs> {
    const options = {
      json: {pEmail: email, pPwd: password, pIsRememberChecked: true},
      uri: `${URL}/App_WebServices/Ajax/User.asmx/Login`,
    };
    const req = rp.defaults({
      jar: true,
    });

    await req.post(options);

    this.req = req;
    return this;
  }

  public getCandidate = async (): Promise<void> => {
    const result: string = await this.req.get(`${URL}/candidate/`);
    console.log(parseStringToHTML(result));
  }

  public getJobApplications = async (): Promise<void> => {
    const result = await this.req.get(`${URL}/Candidate/Match/List.aspx`);
    selectJobApplications(parseStringToHTML(result));
  }

  public prompt = (input: string) => {
    const option = input.toString().trim();
    this.decide(option);
  }

  public takeInput(): void {
    // console.log("ESCOLHA\n\n");
    console.log(chalk.blue("\n\nEscolha uma das opções\n\n"));
    console.log(chalk.bgYellow.black("1 - Aplicação em vagas"));
    console.log(chalk.bgYellow.black("2 - Dados pessoais"));
    console.log(chalk.bgCyan.black("\n\nPressione qualquer outra tecla para sair"));
    // const stdin = process.openStdin();
    // stdin.addListener("data", this.prompt);
    this.prompt("1");
  }

  private async decide(input: string): Promise<void> {
    switch (input) {
      case "1":
        await this.getJobApplications();
        break;
      case "2":
        await this.getCandidate();
        break;
      default:
        process.exit();
        break;
      }
      // this.takeInput();
    process.exit();
  }
}

export default Infojobs;
