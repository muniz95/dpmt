import CLI, { Spinner } from 'clui'
import dpmt from '../package.json'
import linkedin from './lib/linkedin'
import intelly from './lib/intelly'
import { config } from 'dotenv'

import program from 'commander'

config()
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

program.parse(process.argv)