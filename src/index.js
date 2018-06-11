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
 * @typedef {Object} Config
 * @property {number} [space=0] How many spaces to use to indent JSON when writing (default no indent).
 * @property {string} [mode=spread] The write mode, only spread at the moment which will make the new data be merged on top of the old one.
 */

/**
 * Read or write a JSON file.
 * @param {string} path Path to the file to read.
 * @param {object} data Data to write to the file (if JSON file exists, fields in it will be overridden).
 * @param {Config} config how to write data.
 * @param {number} [config.space=0] How many spaces to use to indent JSON when writing (default no indent).
 * @param {string} [config.mode=spread] The write mode, only spread at the moment which will make the new data be merged on top of the old one.
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
