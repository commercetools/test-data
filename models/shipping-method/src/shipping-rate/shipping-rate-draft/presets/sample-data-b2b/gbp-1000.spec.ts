import type { TShippingRateDraft } from '../../../types';
import gbp1000 from './gbp-1000';

describe(`with gbp1000 preset`, () => {
  it(`should return a gbp1000 preset`, () => {
    const gbp1000Preset = gbp1000().build<TShippingRateDraft>();
    expect(gbp1000Preset).toMatchInlineSnapshot(`
      {
        "freeAbove": {
          "centAmount": 10000,
          "currencyCode": "GBP",
        },
        "price": {
          "centAmount": 1000,
          "currencyCode": "GBP",
        },
        "tiers": [],
      }
    `);
  });

  it(`should return a gbp1000 preset when built for graphql`, () => {
    const gbp1000PresetGraphql = gbp1000().buildGraphql<TShippingRateDraft>();
    expect(gbp1000PresetGraphql).toMatchInlineSnapshot(`
      {
        "freeAbove": {
          "centAmount": 10000,
          "currencyCode": "GBP",
        },
        "price": {
          "centAmount": 1000,
          "currencyCode": "GBP",
        },
        "tiers": [],
      }
    `);
  });
});
