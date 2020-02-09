import { test, runTests } from 'testra'
import { parse, render } from '../index'

test('parse', (it, is) => {

  const source = '<div>...</div>'

  it('exists', parse ? true : false)

  const result = parse(source)

  it('returns an array of nodes', Array.isArray(result))
})


test('render', (it, is) => {

  it('exists', render ? true : false)
})

runTests()