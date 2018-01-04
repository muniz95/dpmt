import CLI, { Spinner } from 'clui'
import dpmt from '../package.json'
import linkedin from './lib/linkedin'
import intelly from './lib/intelly'
import infojobs from './lib/infojobs'
import vagas from './lib/vagas'
import meta from './lib/meta'
import { config } from 'dotenv'

import program from 'commander'

config()
const username = process.env.username
const cpf = process.env.cpf
const email = process.env.email
const senha = process.env.senha

program
  .version(dpmt.version)
  .description('Versão atual')

program
  .command('test <param1> <param2>')
  .alias('t')
  .description('Test')
  .action(
    (param1, param2) => console.log(param1, param2)
  )

program
  .command('url')
  .description('URL principal')
  .action(() => console.log(linkedin.site))

program
  .command('intelly')
  .description('Login no sistema iSend da IntellyIT')
  .action(() => intelly.login(email, senha))

program
  .command('infojobs')
  .description('Login no sistema do Infojobs')
  .action(() => infojobs.getCandidate(email, senha))

program
  .command('vagas')
  .description('Login no sistema do Vagas.com')
  .action(() => vagas.getCandidateHistory(username, senha))

program
  .command('meta')
  .description('Login no sistema da Meta IT')
  .action(() => meta.login(cpf, senha))

program.parse(process.argv)