import type { TTaxRateDraft } from '../../../types';
import withCountryUsaNoStateAndIncludedInPrice from './with-country-usa-no-state-and-included-in-price';

describe('with the preset `country usa, no state & included in price`', () => {
  it('should return a tax rate containing `us`, no state & included in price set to true', () => {
    const taxRate =
      withCountryUsaNoStateAndIncludedInPrice().build<TTaxRateDraft>();

    expect(taxRate).toEqual(
      expect.objectContaining({
        country: expect.stringContaining('US'),
        state: undefined,
        includedInPrice: true,
      })
    );
  });
});
