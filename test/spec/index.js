import { equal, deepEqual } from 'zoroaster/assert'
import Context from '../context'
import fileJson from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof fileJson, 'function')
  },
  async 'reads json from the file'({ data, path }) {
    const json = await fileJson(path)
    deepEqual(json, data)
  },
  async 'writes json data'({ data, tempPath }) {
    await fileJson(tempPath, data)
    const r = require(tempPath)
    deepEqual(r, data)
  },
}

export default T
