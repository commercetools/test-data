/* eslint-disable jest/no-conditional-expect */
/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { TProductDiscountDraft } from '../../../types';
import withPredicate from './with-predicate';

it(`should set all fields to specified values`, () => {
  const withPredicatePreset = withPredicate().build<TProductDiscountDraft>();

  expect(withPredicatePreset).toEqual(
    expect.objectContaining({
      predicate: 'sku = "this-should-never-match-an-e2e"',
    })
  );

  // Validate the value object based on its randomized product-discount-value type
  if (withPredicatePreset.value) {
    const { type } = withPredicatePreset.value;

    switch (type) {
      case 'absolute':
        expect(withPredicatePreset.value).toEqual(
          expect.objectContaining({
            money: expect.arrayContaining([
              expect.objectContaining({
                centAmount: expect.any(Number),
                currencyCode: 'USD',
              }),
            ]),
            type: 'absolute',
          })
        );
        break;
      case 'relative':
        expect(withPredicatePreset.value).toEqual(
          expect.objectContaining({
            permyriad: expect.any(Number),
            type: 'relative',
          })
        );
        break;
      case 'external':
        expect(withPredicatePreset.value).toEqual({
          type: 'external',
        });
        break;
    }
  }
});
