const __bosom = require('./bosom')

/**
 * Read or write a JSON file.
 * @param {string} path Path to the file to read.
 * @param {Object} [data] Data to write to the file (if JSON file exists, fields in it will be overridden).
 * @param {!_bosom.Options} [config] Options for writing.
 * @param {number} [config.space] How many spaces to use for indentation.
 * @param {!Function} [config.replacer] The _replacer function_ used when serializing data (see [`JSON.stringify` documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)).
 */
async function bosom(path, data, config) {
  return await __bosom(path, data, config)
}

module.exports = bosom

/* typal types/index.xml noSuppress closure */
/**
 * @typedef {_bosom.Options} Options `＠record` Options for writing.
 */
/**
 * @typedef {Object} _bosom.Options `＠record` Options for writing.
 * @prop {number} [space] How many spaces to use for indentation.
 * @prop {!Function} [replacer] The _replacer function_ used when serializing data (see [`JSON.stringify` documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)).
 */

//  console.log('t')