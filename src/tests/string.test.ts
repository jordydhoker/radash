import { assert } from 'chai'
import * as _ from '..'
import { _camal, _snake, _dash } from '../string'

describe('string module', () => {

  describe('camal function', () => {
    test('returns correctly cased string', () => {
      const result = _camal(
        'hello', 'world'
      )
      assert.equal(result, 'helloWorld')
    })
    test('returns single word', () => {
      const result = _camal(
        'hello'
      )
      assert.equal(result, 'hello')
    })
    test('returns empty string for empty input', () => {
      const result = _camal()
      assert.equal(result, '')
    })
  })

  describe('camalCase function', () => {
    test('returns non alphanumerics with -space and capital', () => {
      const result = _.camal('Exobase Starter_flash AND-go')
      assert.equal(result, 'exobaseStarterFlashAndGo')
    })
  })

  describe('snake function', () => {
    test('returns correctly cased string', () => {
      const result = _snake(
        'hello', 'world'
      )
      assert.equal(result, 'hello_world')
    })
    test('returns single word', () => {
      const result = _snake(
        'hello'
      )
      assert.equal(result, 'hello')
    })
    test('returns empty string for empty input', () => {
      const result = _snake()
      assert.equal(result, '')
    })
  })

  describe('snakeCase function', () => {
    test('returns non alphanumerics with _', () => {
      const result = _.snake('Exobase Starter_flash AND-go')
      assert.equal(result, 'exobase_starter_flash_and_go')
    })
  })

  describe('dash function', () => {
    test('returns correctly cased string', () => {
      const result = _dash(
        'hello', 'world'
      )
      assert.equal(result, 'hello-world')
    })
    test('returns single word', () => {
      const result = _dash(
        'hello'
      )
      assert.equal(result, 'hello')
    })
    test('returns empty string for empty input', () => {
      const result = _dash()
      assert.equal(result, '')
    })
  })

  describe('dashCase function', () => {
    test('returns non alphanumerics with -', () => {
      const result = _.dash('Exobase Starter_flash AND-go')
      assert.equal(result, 'exobase-starter-flash-and-go')
    })
  })

  describe('template function', () => {
    test('replaces all occurrences', () => {

      const tmp = `
    Hello my name is {{name}}. I am a {{type}}.
    Not sure why I am {{reason}}.

    Thank You - {{name}}
  `
      const data = {
        name: 'Ray',
        type: 'template',
        reason: 'so beautiful'
      }

      const result = _.template(tmp, data)
      const expected = `
    Hello my name is ${data.name}. I am a ${data.type}.
    Not sure why I am ${data.reason}.

    Thank You - ${data.name}
  `

      assert.equal(result, expected)
    })
  })

  describe('capitalize function', () => {
    test('handles null', () => {
      const result = _.capitalize(null)
      assert.equal(result, '')
    })
    test('converts hello as Hello', () => {
      const result = _.capitalize('hello')
      assert.equal(result, 'Hello')
    })
    test('converts hello Bob as Hello bob', () => {
      const result = _.capitalize('hello Bob')
      assert.equal(result, 'Hello bob')
    })
  })

})