/* eslint-disable no-console */
import bosom from '../src'
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
