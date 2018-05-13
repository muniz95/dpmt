// import CLI, { Spinner } from 'clui'
import dpmt from '../package.json'
import './lib/linkedin'
import Intelly from './lib/intelly'
import Infojobs from './lib/infojobs'
import Vagas from './lib/vagas'
import Meta from './lib/meta'
import { config } from 'dotenv'

import program from 'commander'

config()
const username: any = process.env.username
const cpf: any = process.env.cpf
const email: any = process.env.email
const senha: any = process.env.senha

program
  .version(dpmt.version)
  .description('Versão atual')

program
  .command('test <param1> <param2>')
  .alias('t')
  .description('Test')
  .action(
    (param1: string, param2: string) => console.log(param1, param2)
  )

program
  .command('intelly')
  .description('Login no sistema iSend da IntellyIT')
  .action(async () => {
    const intelly: Intelly = new Intelly()
    await intelly.login(email, senha)
    intelly.getHome()
  })

program
  .command('infojobs')
  .description('Login no sistema do Infojobs')
  .action(async () => {
    const infojobs: Infojobs = new Infojobs()
    await infojobs.login(email, senha)
    infojobs.getJobApplications()
    // const stdin = process.openStdin();

    // stdin.addListener("data", infojobs.prompt);
  })

program
  .command('vagas')
  .description('Login no sistema do Vagas.com')
  .action(async () => {
    const vagas: Vagas = new Vagas()
    await vagas.login(username, senha)
    vagas.getServices()
  })

program
  .command('meta')
  .description('Login no sistema da Meta IT')
  .action(async () => {
    const meta: Meta = new Meta()
    await meta.login(cpf, senha)
    console.log(meta.html());
  })

program.parse(process.argv)