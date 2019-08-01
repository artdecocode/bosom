#!/usr/bin/env node
'use strict';
const util = require('util');
const fs = require('fs');             
const {debuglog:f} = util;
const {createWriteStream:g, readFile:h} = fs;
const k = f("bosom"), l = async a => await new Promise((b, c) => {
  h(a, (d, e) => d ? c(d) : b(`${e}`));
}), q = async(a, b, c) => {
  const {a:d = null, b:e = null} = c, m = await g(a), n = JSON.stringify(b, d, e);
  await new Promise(p => {
    m.end(n, p);
  });
};
module.exports = async(a, b, c = {}) => {
  if (b) {
    return q(a, b, c);
  }
  k("Reading %s", a);
  a = await l(a);
  return JSON.parse(a);
};


//# sourceMappingURL=bosom.js.map