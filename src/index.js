import { debuglog } from 'util'
import read from '@wrote/read'
import write from '@wrote/write'

const LOG = debuglog('bosom')

const writeJSON = async (path, data, config) => {
  const {
    replacer = null,
    space = null,
  } = config
  const json = JSON.stringify(data, replacer, space)
  await write(path, json)
}

/**
 * Read or write a JSON file.
 * @param {string} path Path to the file to read.
 * @param {object} data Data to write to the file (if JSON file exists, fields in it will be overridden).
 * @param {_bosom.Options} config how to write data.
 */
const bosom = async (path, data, config = {}) => {
  if (data) {
    const res = await writeJSON(path, data, config)
    return res
  }
  LOG('Reading %s', path)
  const r = await read(path)
  const res = JSON.parse(r)
  return res
}

export default bosom

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('..').Options} _bosom.Options
 */