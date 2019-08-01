import { equal, deepEqual } from '@zoroaster/assert'
import Context from '../context'
import bosom from '../../src'
import { resolve as res } from 'path'

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
  async 'writes json data'({ data, resolve }) {
    const path = resolve('temp.json')
    await bosom(path, data)
    const r = require(res(path))
    deepEqual(r, data)
  },
  async 'writes json data with spaces'({ data, resolve, snapshot }) {
    const path = resolve('temp.json')
    await bosom(path, data, {
      space: 2,
    })
    return await snapshot()
  },
}

export default T
