import { equal, deepEqual } from 'zoroaster/assert'
import Context from '../context'
import fileJson from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof fileJson, 'function')
  },
  async 'calls package without error'({ file, path }) {
    const json = await fileJson(path)
    deepEqual(json, file)
  },
  async 'calls test context method'({ file, tempPath }) {
    await fileJson(tempPath, file)
    const r = require(tempPath)
    deepEqual(r, file)
  },
}

export default T
