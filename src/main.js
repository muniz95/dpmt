import CLI, { Spinner } from 'clui'
import dpmt from '../package.json'
import linkedin from './lib/linkedin'

import program from 'commander'

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

program.parse(process.argv)