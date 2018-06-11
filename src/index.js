import { debuglog } from 'util'
import { readFile, createWriteStream } from 'fs'

const LOG = debuglog('file-json')

const re = async (path) => {
  const ret = await new Promise((r, j) => {
    readFile(path, (er, data) => {
      if (er) return j(er)
      return r(`${data}`)
    })
  })
  return ret
}

const writeJSON = async (path, data, config) => {
  const {
    replacer = null,
    space = null,
  } = config
  const ws = await createWriteStream(path)
  const json = JSON.stringify(data, replacer, space)
  await new Promise((r) => {
    ws.end(json, r)
  })
}

/**
 * Read or write a JSON file.
 * @param {string} path Path to the file to read.
 * @param {object} data Data to write to the file (if JSON file exists, fields in it will be overridden).
 * @param {object} config how to write data.
 * @param {string} [config.space=0] How many spaces to use to indent JSON when writing (default no indent).
 */
const fileJson = async (path, data, config = {}) => {
  if (data) {
    const res = writeJSON(path, data, config)
    return res
  }
  LOG('Reading %s', path)
  const r = await re(path)
  const res = JSON.parse(r)
  return res
}

export default fileJson
