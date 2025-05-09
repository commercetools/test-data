import type { TShippingRateDraft } from '../../../types';
import gbp10000 from './gbp-10000';

describe(`with gbp10000 preset`, () => {
  it(`should return a gbp10000 preset`, () => {
    const gbp10000Preset = gbp10000().build<TShippingRateDraft>();
    expect(gbp10000Preset).toMatchInlineSnapshot(`
      {
        "freeAbove": {
          "centAmount": 1000000,
          "currencyCode": "GBP",
        },
        "price": {
          "centAmount": 10000,
          "currencyCode": "GBP",
        },
        "tiers": [],
      }
    `);
  });

  it(`should return a gbp10000 preset when built for graphql`, () => {
    const gbp10000PresetGraphql = gbp10000().buildGraphql<TShippingRateDraft>();
    expect(gbp10000PresetGraphql).toMatchInlineSnapshot(`
      {
        "freeAbove": {
          "centAmount": 1000000,
          "currencyCode": "GBP",
        },
        "price": {
          "centAmount": 10000,
          "currencyCode": "GBP",
        },
        "tiers": [],
      }
    `);
  });
});
