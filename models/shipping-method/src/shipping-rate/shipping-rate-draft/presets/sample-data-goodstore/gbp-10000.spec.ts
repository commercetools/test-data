import type {
  TShippingRateDraft,
  TShippingRateDraftGraphql,
} from '../../../types';
import gbp10000 from './gbp-10000';

describe('with gbp10000 preset', () => {
  it('should return a gbp10000 preset', () => {
    const gbp10000Preset = gbp10000().build<TShippingRateDraft>();

    expect(gbp10000Preset).toMatchObject({
      price: { centAmount: 10000, currencyCode: 'GBP' },
      tiers: [],
    });
  });

  it('should return a gbp10000 preset when built for graphql', () => {
    const gbp10000PresetGraphql =
      gbp10000().buildGraphql<TShippingRateDraftGraphql>();

    expect(gbp10000PresetGraphql).toMatchObject({
      price: { centAmount: 10000, currencyCode: 'GBP' },
      tiers: [],
    });
  });
});
