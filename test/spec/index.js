import { equal, deepEqual } from 'zoroaster/assert'
import SnapshotContext from 'snapshot-context'
import Context from '../context'
import fileJson from '../../src'

/** @type {Object.<string, (c: Context, s: SnapshotContext)>} */
const T = {
  context: [
    Context,
    SnapshotContext,
  ],
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
  async 'writes json data with spaces'({ data, tempPath, SNAPSHOT_DIR, readTemp }, { setDir, test }) {
    setDir(SNAPSHOT_DIR)
    await fileJson(tempPath, data, {
      space: 2,
    })
    const actual = await readTemp()
    await test('2-space.txt', actual)
  },
}

export default T
