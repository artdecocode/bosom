import { resolve } from 'path'
import file from '../fixtures/file.json'
import { unlink } from 'fs'
import { debuglog } from 'util'

const LOG = debuglog('file-json')

/**
 * A testing context for the file-json.
 */
export default class Context {
  // async _init() {
  //   console.log('init context')
  // }
  // /**
  //  * Example method.
  //  */
  // example() {
  //   return 'OK'
  // }
  get file() {
    return file
  }
  get path() {
    return resolve(__dirname, '../fixtures/file.json')
  }
  get tempPath() {
    return resolve(__dirname, '../fixtures/temp.json')
  }
  async _destroy() {
    await new Promise((r) => {
      unlink(this.tempPath, () => {
        // if (err) return j(err)
        LOG('removed temp file')
        r()
        // r()
      })
    })
  }
}
