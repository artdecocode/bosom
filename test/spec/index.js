import { equal } from 'zoroaster/assert'
import Context from '../context'
import fileJson from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof fileJson, 'function')
  },
  async 'calls package without error'() {
    await fileJson()
  },
  async 'calls test context method'({ example }) {
    await example()
  },
}

export default T
