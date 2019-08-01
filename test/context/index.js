import TempContext from 'temp-context'

const data = {
  test: true,
  program: 'bosom',
  i: 774,
}

/**
 * A testing context for the bosom.
 */
export default class Context extends TempContext {
  get data() {
    return data
  }
  get path() {
    return 'test/fixture/file.json'
  }
}
