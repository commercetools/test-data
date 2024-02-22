import type { TShippingRateDraft } from '../../../types';
import gbp500 from './gbp-500';

describe(`with gbp500 preset`, () => {
  it(`should return a gbp500 preset`, () => {
    const gbp500Preset = gbp500().build<TShippingRateDraft>();
    expect(gbp500Preset).toMatchInlineSnapshot(`
      {
        "freeAbove": undefined,
        "price": {
          "centAmount": 500,
          "currencyCode": "GBP",
        },
        "tiers": [],
      }
    `);
  });

  it(`should return a gbp500 preset when built for graphql`, () => {
    const gbp500PresetGraphql = gbp500().buildGraphql<TShippingRateDraft>();
    expect(gbp500PresetGraphql).toMatchInlineSnapshot(`
      {
        "freeAbove": undefined,
        "price": {
          "centAmount": 500,
          "currencyCode": "GBP",
        },
        "tiers": [],
      }
    `);
  });
});
