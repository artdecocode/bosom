/* eslint-disable no-console */
import bosom from '../src'
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
