import type {
  TShippingRateDraft,
  TShippingRateDraftGraphql,
} from '../../../types';
import gbp50000 from './gbp-50000';

describe('with gbp50000 preset', () => {
  it('should return a gbp50000 preset', () => {
    const gbp50000Preset = gbp50000().build<TShippingRateDraft>();

    expect(gbp50000Preset).toMatchInlineSnapshot(`
      {
        "freeAbove": {
          "centAmount": 1000000,
          "currencyCode": "GBP",
        },
        "price": {
          "centAmount": 50000,
          "currencyCode": "GBP",
        },
        "tiers": undefined,
      }
    `);
  });

  it('should return a gbp50000 preset when built for graphql', () => {
    const gbp50000PresetGraphql =
      gbp50000().buildGraphql<TShippingRateDraftGraphql>();

    expect(gbp50000PresetGraphql).toMatchInlineSnapshot(`
      {
        "freeAbove": {
          "centAmount": 1000000,
          "currencyCode": "GBP",
        },
        "price": {
          "centAmount": 50000,
          "currencyCode": "GBP",
        },
        "tiers": undefined,
      }
    `);
  });
});
