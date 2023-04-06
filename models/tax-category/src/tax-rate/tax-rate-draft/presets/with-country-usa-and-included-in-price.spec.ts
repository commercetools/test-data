import { TTaxRateDraft } from '../../types';
import withCountryUsaAndIncludedInPrice from './with-country-usa-and-included-in-price';

describe('with the preset `country usa and included in price`', () => {
  it('should return a tax rate containing `us` and included in price set to true', () => {
    const taxRate = withCountryUsaAndIncludedInPrice().build<TTaxRateDraft>();

    expect(taxRate).toEqual(
      expect.objectContaining({
        country: expect.stringContaining('US'),
        includedInPrice: true,
      })
    );
  });
});
