import { equal, deepEqual } from '@zoroaster/assert'
import Context from '../context'
import bosom from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof bosom, 'function')
  },
  async 'reads json from the file'({ data, path }) {
    const json = await bosom(path)
    deepEqual(json, data)
  },
  async 'writes json data'({ data, tempPath }) {
    await bosom(tempPath, data)
    const r = require(tempPath)
    deepEqual(r, data)
  },
  async 'writes json data with spaces'({ data, tempPath, readTemp }) {
    await bosom(tempPath, data, {
      space: 2,
    })
    const actual = await readTemp()
    return actual
  },
}

export default T
