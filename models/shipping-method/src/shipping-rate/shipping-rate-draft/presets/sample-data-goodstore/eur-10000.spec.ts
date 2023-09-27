import type {
  TShippingRateDraft,
  TShippingRateDraftGraphql,
} from '../../../types';
import eur10000 from './eur-10000';

describe('with eur10000 preset', () => {
  it('should return a eur10000 preset', () => {
    const eur10000Preset = eur10000().build<TShippingRateDraft>();

    expect(eur10000Preset).toMatchObject({
      price: { centAmount: 10000, currencyCode: 'EUR' },
      tiers: [],
    });
  });

  it('should return a eur10000 preset when built for graphql', () => {
    const eur10000PresetGraphql =
      eur10000().buildGraphql<TShippingRateDraftGraphql>();

    expect(eur10000PresetGraphql).toMatchObject({
      price: { centAmount: 10000, currencyCode: 'EUR' },
      tiers: [],
    });
  });
});
