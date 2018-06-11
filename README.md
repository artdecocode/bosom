# bosom

[![npm version](https://badge.fury.io/js/bosom.svg)](https://badge.fury.io/js/bosom)

`bosom` is a Node.js package which can read and write a JSON file.

```sh
yarn add -E bosom
```

## API

The package exports a single function which can be used for both reading and writing of data. When only a single argument is passed, the read mode is assumed. To write data, it should be passed as the second argument, with an optional config.

### `bosom(path, data:? object, config:? object) => Promise.<string>?`

`bosom` will read the file when only a path is passed.

```js
/* yarn example/read.js */
import bosom from 'bosom'
import { resolve } from 'path'

(async () => {
  try {
    const p = resolve(__dirname, 'example.json')
    const res = await bosom(p)
    console.log(res)
  } catch (err) {
    console.error(err)
  }
})()
```

```fs
{ hello: 'world', foo: true, bar: -1 }
```

When data is passed, `bosom` will write into that file the serialised version of the object. An optional configuration can be passed along to the `JSON.stringify` method.

| option   | type     | info                                          |
|----------|----------|-----------------------------------------------|
| space    | number   | How many spaces to use for indentation.       |
| replacer | function | Replacer function used when serializing data. |

```js
/* yarn example/write.js */
import bosom from 'bosom'
import { resolve } from 'path'

(async () => {
  try {
    const p = resolve(__dirname, 'write-temp.json')
    await bosom(p, {
      'my-data': true,
      bar: 'foo',
    }, {
      space: 2,
    })

    // test the written value
    const actual = require(p)
    console.log(actual)
  } catch (err) {
    console.error(err)
  }
})()
```

```fs
{ 'my-data': true, bar: 'foo' }
```

---

(c) [Art Deco Code][1] 2018

[1]: https://artdeco.bz
