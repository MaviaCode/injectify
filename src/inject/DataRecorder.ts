declare var global: any
import chalk from 'chalk'
import Project from '../database/Project'
import { escape } from 'mongo-escape'
import { Injectify } from './core/definitions/core'

export default class {
  static record(socket: { session: Injectify.session.Info, client: any }, name: string, table: string, data: any) {
    let { session, client } = socket
    Project.update({
      name: name,
      [`data.${table}`]: {
        $exists: true
      }
    }, {
      $push: {
        [`data.${table}`]: {
          url: session.window.url,
          ip: client.ip.query,
          timestamp: +new Date(),
          data: escape(data)
        }
      }
    }).then((result) => {
      if (result.nModified && global.config.verbose) {
        console.log(
          chalk.greenBright(`[inject/DataRecorder] `) +
          chalk.yellowBright(`Recorded data for project ${chalk.magentaBright(name)} to the ${chalk.magentaBright(table)} table`)
        )
      }
    }).catch(error => {
      if (global.config.verbose) {
        console.log(
          chalk.redBright(`[inject/DataRecorder] `) +
          chalk.yellowBright(error)
        )
      }
    })
  }
}