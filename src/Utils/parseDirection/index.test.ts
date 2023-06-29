import { parseDirection } from '.'

describe('parseDirection', () => {
  test('invalid direction', () => {
    const result = parseDirection()

    expect(result.hasDirection).toBe(false)
    expect(result.direction).toBe('')
    expect(result.isHorizontal).toBe(false)
    expect(result.isVertical).toBe(false)
  })

  describe('direction prop', () => {
    test('direction: "horizontal"', () => {
      const result = parseDirection({ direction: 'horizontal' })

      expect(result.hasDirection).toBe(true)
      expect(result.direction).toBe('row')
      expect(result.isHorizontal).toBe(true)
      expect(result.isVertical).toBe(false)
    })

    test('direction: "vertical"', () => {
      const result = parseDirection({ direction: 'vertical' })

      expect(result.hasDirection).toBe(true)
      expect(result.direction).toBe('column')
      expect(result.isHorizontal).toBe(false)
      expect(result.isVertical).toBe(true)
    })
  })

  describe('directions as props', () => {
    test('horizontal: true', () => {
      const result = parseDirection({ horizontal: true })

      expect(result.hasDirection).toBe(true)
      expect(result.direction).toBe('row')
      expect(result.isHorizontal).toBe(true)
      expect(result.isVertical).toBe(false)
    })

    test('vertical: true', () => {
      const result = parseDirection({ vertical: true })

      expect(result.hasDirection).toBe(true)
      expect(result.direction).toBe('column')
      expect(result.isHorizontal).toBe(false)
      expect(result.isVertical).toBe(true)
    })
  })
})
