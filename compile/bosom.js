#!/usr/bin/env node
             
const util = require('util');
const fs = require('fs');
const stream = require('stream');
const os = require('os');             
const {debuglog:l} = util;
const {createReadStream:n, createWriteStream:p} = fs;
const {Writable:q} = stream;
const r = (a, b = 0, d = !1) => {
  if (0 === b && !d) {
    return a;
  }
  a = a.split("\n", d ? b + 1 : void 0);
  return d ? a[a.length - 1] : a.slice(b).join("\n");
}, t = (a, b = !1) => r(a, 2 + (b ? 1 : 0)), u = a => {
  ({callee:{caller:a}} = a);
  return a;
};
const {homedir:v} = os;
const w = /\s+at.*(?:\(|\s)(.*)\)?/, x = /^(?:(?:(?:node|(?:internal\/[\w/]*|.*node_modules\/(?:IGNORED_MODULES)\/.*)?\w+)\.js:\d+:\d+)|native)/, y = v(), z = a => {
  const {pretty:b = !1, ignoredModules:d = ["pirates"]} = {}, e = new RegExp(x.source.replace("IGNORED_MODULES", d.join("|")));
  return a.replace(/\\/g, "/").split("\n").filter(c => {
    c = c.match(w);
    if (null === c || !c[1]) {
      return !0;
    }
    c = c[1];
    return c.includes(".app/Contents/Resources/electron.asar") || c.includes(".app/Contents/Resources/default_app.asar") ? !1 : !e.test(c);
  }).filter(c => c.trim()).map(c => b ? c.replace(w, (h, f) => h.replace(f, f.replace(y, "~"))) : c).join("\n");
};
function A(a, b, d = !1) {
  return function(e) {
    var c = u(arguments), {stack:h} = Error();
    const f = r(h, 2, !0), k = (h = e instanceof Error) ? e.message : e;
    c = [`Error: ${k}`, ...null !== c && a === c || d ? [b] : [f, b]].join("\n");
    c = z(c);
    return Object.assign(h ? e : Error(), {message:k, stack:c});
  };
}
;function B(a) {
  var {stack:b} = Error();
  const d = u(arguments);
  b = t(b, a);
  return A(d, b, a);
}
;const C = (a, b) => {
  b.once("error", d => {
    a.emit("error", d);
  });
  return b;
};
class D extends q {
  constructor(a) {
    const {binary:b = !1, rs:d = null, ...e} = a || {}, {f:c = B(!0), proxyError:h} = a || {}, f = (k, m) => c(m);
    super(e);
    this.a = [];
    this.b = new Promise((k, m) => {
      this.on("finish", () => {
        let g;
        b ? g = Buffer.concat(this.a) : g = this.a.join("");
        k(g);
        this.a = [];
      });
      this.once("error", g => {
        if (-1 == g.stack.indexOf("\n")) {
          f`${g}`;
        } else {
          const E = z(g.stack);
          g.stack = E;
          h && f`${g}`;
        }
        m(g);
      });
      d && C(this, d).pipe(this);
    });
  }
  _write(a, b, d) {
    this.a.push(a);
    d();
  }
  get c() {
    return this.b;
  }
}
const F = async a => {
  ({c:a} = new D({rs:a, f:B(!0)}));
  return await a;
};
async function G(a) {
  a = n(a);
  return await F(a);
}
;async function H(a, b) {
  if (!a) {
    throw Error("No path is given.");
  }
  const d = B(!0), e = p(a);
  await new Promise((c, h) => {
    e.on("error", f => {
      f = d(f);
      h(f);
    }).on("close", c).end(b);
  });
}
;const I = l("bosom"), J = async(a, b, d) => {
  const {replacer:e = null, space:c = null} = d;
  b = JSON.stringify(b, e, c);
  await H(a, b);
};
module.exports = async(a, b, d = {}) => {
  if (b) {
    return await J(a, b, d);
  }
  I("Reading %s", a);
  a = await G(a);
  return JSON.parse(a);
};


//# sourceMappingURL=bosom.js.map