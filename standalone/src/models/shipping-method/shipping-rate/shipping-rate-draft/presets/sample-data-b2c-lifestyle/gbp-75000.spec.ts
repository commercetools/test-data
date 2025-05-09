import type {
  TShippingRateDraft,
  TShippingRateDraftGraphql,
} from '../../../types';
import gbp75000 from './gbp-75000';

describe('with gbp75000 preset', () => {
  it('should return a gbp75000 preset', () => {
    const gbp75000Preset = gbp75000().build<TShippingRateDraft>();

    expect(gbp75000Preset).toMatchInlineSnapshot(`
      {
        "freeAbove": undefined,
        "price": {
          "centAmount": 75000,
          "currencyCode": "GBP",
        },
        "tiers": [],
      }
    `);
  });

  it('should return a gbp75000 preset when built for graphql', () => {
    const gbp75000PresetGraphql =
      gbp75000().buildGraphql<TShippingRateDraftGraphql>();

    expect(gbp75000PresetGraphql).toMatchInlineSnapshot(`
      {
        "freeAbove": undefined,
        "price": {
          "centAmount": 75000,
          "currencyCode": "GBP",
        },
        "tiers": [],
      }
    `);
  });
});
