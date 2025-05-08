import type { TShippingRateDraft } from '../../../types';
import gbp30000 from './gbp-30000';

describe(`with gbp30000 preset`, () => {
  it(`should return a gbp30000 preset`, () => {
    const gbp30000Preset = gbp30000().build<TShippingRateDraft>();
    expect(gbp30000Preset).toMatchInlineSnapshot(`
      {
        "freeAbove": {
          "centAmount": 1500000,
          "currencyCode": "GBP",
        },
        "price": {
          "centAmount": 30000,
          "currencyCode": "GBP",
        },
        "tiers": [],
      }
    `);
  });

  it(`should return a gbp30000 preset when built for graphql`, () => {
    const gbp30000PresetGraphql = gbp30000().buildGraphql<TShippingRateDraft>();
    expect(gbp30000PresetGraphql).toMatchInlineSnapshot(`
      {
        "freeAbove": {
          "centAmount": 1500000,
          "currencyCode": "GBP",
        },
        "price": {
          "centAmount": 30000,
          "currencyCode": "GBP",
        },
        "tiers": [],
      }
    `);
  });
});
