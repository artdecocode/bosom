import { resolve } from 'path'
import { unlink } from 'fs'
import { debuglog } from 'util'

const data = {
  test: true,
  program: 'file-json',
  i: 774,
}

const LOG = debuglog('file-json')

/**
 * A testing context for the file-json.
 */
export default class Context {
  get data() {
    return data
  }
  get path() {
    return resolve(__dirname, '../fixtures/file.json')
  }
  get tempPath() {
    return resolve(__dirname, '../fixtures/temp.json')
  }
  async _destroy() {
    await new Promise((r) => {
      unlink(this.tempPath, (e) => {
        !e && LOG('removed temp file')
        r()
      })
    })
  }
}
