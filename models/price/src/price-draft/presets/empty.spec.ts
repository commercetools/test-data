import { TPriceDraft } from '../../types';
import empty from './empty';

it(`should set all specified fields to undefined`, () => {
  const emptyPriceDraft = empty().build<TPriceDraft>();
  expect(emptyPriceDraft.key).toMatchInlineSnapshot(`undefined`);
  expect(emptyPriceDraft.value).toEqual({
    centAmount: expect.any(Number),
    currencyCode: expect.any(String),
    type: 'centPrecision',
    fractionDigits: 2,
  });
  expect(emptyPriceDraft.country).toMatchInlineSnapshot(`undefined`);
  expect(emptyPriceDraft.customerGroup).toMatchInlineSnapshot(`undefined`);
  expect(emptyPriceDraft.channel).toMatchInlineSnapshot(`undefined`);
  expect(emptyPriceDraft.validFrom).toMatchInlineSnapshot(`undefined`);
  expect(emptyPriceDraft.validUntil).toMatchInlineSnapshot(`undefined`);
  expect(emptyPriceDraft.tiers).toMatchInlineSnapshot(`undefined`);
  expect(emptyPriceDraft.discounted).toMatchInlineSnapshot(`undefined`);
  expect(emptyPriceDraft.custom).toMatchInlineSnapshot(`undefined`);
});
