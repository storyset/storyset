import { parseAlign } from '.'

describe('parseAlign', () => {
  test('invalid align', () => {
    const result = parseAlign()

    expect(result.hasAlign).toBe(false)
    expect(result.align).toBe('')
  })

  describe('align prop', () => {
    test(`align: "left"`, () => {
      const result = parseAlign({ align: 'left' })

      expect(result.hasAlign).toBe(true)
      expect(result.align).toBe('left')
    })

    test(`align: "center"`, () => {
      const result = parseAlign({ align: 'center' })

      expect(result.hasAlign).toBe(true)
      expect(result.align).toBe('center')
    })

    test(`align: "right"`, () => {
      const result = parseAlign({ align: 'right' })

      expect(result.hasAlign).toBe(true)
      expect(result.align).toBe('right')
    })
  })

  describe('directions as props', () => {
    test(`left: true`, () => {
      const result = parseAlign({ left: true })

      expect(result.hasAlign).toBe(true)
      expect(result.align).toBe('left')
    })

    test(`center: true`, () => {
      const result = parseAlign({ center: true })

      expect(result.hasAlign).toBe(true)
      expect(result.align).toBe('center')
    })

    test(`right: true`, () => {
      const result = parseAlign({ right: true })

      expect(result.hasAlign).toBe(true)
      expect(result.align).toBe('right')
    })
  })
})
