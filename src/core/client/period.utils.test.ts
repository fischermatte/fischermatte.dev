import {periodText} from './period.utils'

test('periodText', () => {
  expect(
    periodText({
      from: '2008-01-01',
      to: '2009-01-01',
    }),
  ).toMatchInlineSnapshot(`"2008 - 2009"`)
})
