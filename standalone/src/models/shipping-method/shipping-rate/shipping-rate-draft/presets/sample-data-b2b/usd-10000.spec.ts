import type { TShippingRateDraft } from '../../../types';
import usd10000 from './usd-10000';

describe(`with usd10000 preset`, () => {
  it(`should return a usd10000 preset`, () => {
    const usd10000Preset = usd10000().build<TShippingRateDraft>();
    expect(usd10000Preset).toMatchInlineSnapshot(`
      {
        "freeAbove": {
          "centAmount": 1000000,
          "currencyCode": "USD",
        },
        "price": {
          "centAmount": 10000,
          "currencyCode": "USD",
        },
        "tiers": [],
      }
    `);
  });

  it(`should return a usd10000 preset when built for graphql`, () => {
    const usd10000PresetGraphql = usd10000().buildGraphql<TShippingRateDraft>();
    expect(usd10000PresetGraphql).toMatchInlineSnapshot(`
      {
        "freeAbove": {
          "centAmount": 1000000,
          "currencyCode": "USD",
        },
        "price": {
          "centAmount": 10000,
          "currencyCode": "USD",
        },
        "tiers": [],
      }
    `);
  });
});
