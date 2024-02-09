import { TPriceDraft } from '../../types';
import minimal from './minimal';

describe('minimal preset', () => {
  it('should return a price draft preset', () => {
    const priceDraft = minimal().build<TPriceDraft>();

    expect(priceDraft).toMatchObject({
      channel: null,
      country: expect.any(String),
      custom: null,
      customerGroup: null,
      discounted: null,
      key: null,
      tiers: null,
      validFrom: expect.any(String),
      validUntil: expect.any(String),
      value: {
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
      },
    });
  });
});
