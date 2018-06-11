/* eslint-disable no-console */
import fileJson from '../src'
import { resolve } from 'path'

(async () => {
  try {
    const p = resolve(__dirname, 'example.json')
    const res = await fileJson(p)
    console.log(res)
  } catch (err) {
    console.error(err)
  }
})()
