// import CLI, { Spinner } from 'clui'
import { config } from "dotenv";
import dpmt from "../package.json";
import Infojobs from "./lib/infojobs";
import Intelly from "./lib/intelly";
import "./lib/linkedin";
import Meta from "./lib/meta";
import Vagas from "./lib/vagas";

import program from "commander";

config();
const username: string = process.env.username || "";
const cpf: string = process.env.cpf || "";
const email: string = process.env.email || "";
const senha: string = process.env.senha || "";

program
  .version(dpmt.version)
  .description("Versão atual");

program
  .command("test <param1> <param2>")
  .alias("t")
  .description("Test")
  .action(
    (param1: string, param2: string) => console.log(param1, param2),
  );

program
  .command("intelly")
  .description("Login no sistema iSend da IntellyIT")
  .action(async () => {
    const intelly: Intelly = new Intelly();
    await intelly.login(email, senha);
    intelly.getHome();
  });

program
  .command("infojobs")
  .description("Login no sistema do Infojobs")
  .action(async () => {
    const infojobs: Infojobs = new Infojobs();
    await infojobs.login(email, senha);
    infojobs.takeInput();
  });

program
  .command("vagas")
  .description("Login no sistema do Vagas.com")
  .action(async () => {
    const vagas: Vagas = new Vagas();
    await vagas.login(username, senha);
    vagas.getServices();
  });

program
  .command("meta")
  .description("Login no sistema da Meta IT")
  .action(async () => {
    const meta: Meta = new Meta();
    await meta.login(cpf, senha);
    console.log(meta.html());
  });

program.parse(process.argv);
