import { parseTitle } from '.'

describe('parseTitle', () => {
  test('invalid title', () => {
    const result = parseTitle()

    expect(result.hasTitle).toBe(false)
    expect(result.title).toBe('')
  })

  test('valid title', () => {
    const result = parseTitle({ title: 'title' })

    expect(result.hasTitle).toBe(true)
    expect(result.title).toBe('title')
  })
})
