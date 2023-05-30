import type { TTaxCategoryDraft } from '../../../types';
import withCountryUsaAndIncludedInPrice from './with-tax-rate-country-usa-no-state-and-included-in-price';

describe('with a tax rate preset `with country code usa, no state & included in price`', () => {
  it('should return a tax category with a tax rate containing `us`, no state & included in price set to true', () => {
    const taxCategory =
      withCountryUsaAndIncludedInPrice().build<TTaxCategoryDraft>();

    expect(taxCategory).toEqual(
      expect.objectContaining({
        key: expect.any(String),
        name: expect.any(String),
        description: expect.any(String),
        rates: expect.arrayContaining([
          expect.objectContaining({
            country: 'US',
            state: undefined,
            includedInPrice: true,
          }),
        ]),
      })
    );
  });
});
