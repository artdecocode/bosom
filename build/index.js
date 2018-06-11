"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = require("util");

var _fs = require("fs");

const LOG = (0, _util.debuglog)('file-json');

const re = async path => {
  const ret = await new Promise((r, j) => {
    (0, _fs.readFile)(path, (er, data) => {
      if (er) return j(er);
      return r(`${data}`);
    });
  });
  return ret;
};

const writeJSON = async (path, data, config) => {
  const {
    replacer = null,
    space = null
  } = config;
  const ws = await (0, _fs.createWriteStream)(path);
  const json = JSON.stringify(data, replacer, space);
  await new Promise(r => {
    ws.end(json, r);
  });
};
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
    const res = writeJSON(path, data, config);
    return res;
  }

  LOG('Reading %s', path);
  const r = await re(path);
  const res = JSON.parse(r);
  return res;
};

var _default = fileJson;
exports.default = _default;
//# sourceMappingURL=index.js.map