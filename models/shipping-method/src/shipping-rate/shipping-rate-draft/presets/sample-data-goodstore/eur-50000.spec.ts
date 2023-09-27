import type {
  TShippingRateDraft,
  TShippingRateDraftGraphql,
} from '../../../types';
import eur50000 from './eur-50000';

describe('with eur50000 preset', () => {
  it('should return a eur50000 preset', () => {
    const eur50000Preset = eur50000().build<TShippingRateDraft>();

    expect(eur50000Preset).toMatchObject({
      price: { centAmount: 50000, currencyCode: 'EUR' },
      tiers: [],
    });
  });

  it('should return a eur50000 preset when built for graphql', () => {
    const eur50000PresetGraphql =
      eur50000().buildGraphql<TShippingRateDraftGraphql>();

    expect(eur50000PresetGraphql).toMatchObject({
      price: { centAmount: 50000, currencyCode: 'EUR' },
      tiers: [],
    });
  });
});
