# bosom

[![npm version](https://badge.fury.io/js/bosom.svg)](https://npmjs.org/package/bosom)

`bosom` is a Node.JS package which can read and write JSON files easily. It can be used to record and update configurations as serialised JSON data.

```sh
yarn add bosom
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/0.svg?sanitize=true">
</a></p>

<a name="table-of-contents"></a>

- [API](#api)
- [`async bosom(path: string, data=: Object, options=: Options): string|void`](#async-bosompath-stringdata-objectoptions-options-stringvoid)
  * [`_bosom.Options`](#type-_bosomoptions)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/1.svg?sanitize=true">
</a></p>

## API

The package is available by importing its default function:

```js
import bosom from '@rqt/namecheap-web'
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/2.svg?sanitize=true">
</a></p>

## `async bosom(`<br/>&nbsp;&nbsp;`path: string,`<br/>&nbsp;&nbsp;`data=: Object,`<br/>&nbsp;&nbsp;`options=: Options,`<br/>`): string|void`

The function which can be used for both reading and writing of data. When only a single argument is passed, the read mode is assumed. To write data, it should be passed as the second argument, with an optional config.

`bosom` will read the file when only a path is passed.

```js
/* eslint-disable no-console */
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
```js
{ hello: 'world', foo: true, bar: -1 }
```

When data is passed, `bosom` will write into that file the serialised version of the object. An optional configuration can be passed along to the `JSON.stringify` method.

<strong><a name="type-_bosomoptions">`_bosom.Options`</a></strong>: Options for writing.
<table>
 <thead><tr>
  <th>Name</th>
  <th>Type &amp; Description</th>
 </tr></thead>
 <tr>
  <td rowSpan="3" align="center">space</td>
  <td><em>number</em></td>
 </tr>
 <tr></tr>
 <tr>
  <td>How many spaces to use for indentation.</td>
 </tr>
 <tr>
  <td rowSpan="3" align="center">replacer</td>
  <td><em>!Function</em></td>
 </tr>
 <tr></tr>
 <tr>
  <td>The <em>replacer function</em> used when serializing data
(see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify"><code>JSON.stringify</code> documentation</a>).</td>
 </tr>
</table>

```js
/* eslint-disable no-console */
import bosom from 'bosom'
import { resolve } from 'path'

(async () => {
  try {
    const p = resolve(__dirname, 'temp.json')
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
```js
{ 'my-data': true, bar: 'foo' }
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/3.svg?sanitize=true">
</a></p>

## Copyright

<footer client="Rqt" clientLink="https://rqt.biz">

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/-1.svg?sanitize=true">
</a></p>