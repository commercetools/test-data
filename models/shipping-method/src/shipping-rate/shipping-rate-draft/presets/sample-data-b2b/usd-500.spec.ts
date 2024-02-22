import type { TShippingRateDraft } from '../../../types';
import usd500 from './usd-500';

describe(`with usd500 preset`, () => {
  it(`should return a usd500 preset`, () => {
    const usd500Preset = usd500().build<TShippingRateDraft>();
    expect(usd500Preset).toMatchInlineSnapshot(`
      {
        "freeAbove": undefined,
        "price": {
          "centAmount": 500,
          "currencyCode": "USD",
        },
        "tiers": [],
      }
    `);
  });

  it(`should return a usd500 preset when built for graphql`, () => {
    const usd500PresetGraphql = usd500().buildGraphql<TShippingRateDraft>();
    expect(usd500PresetGraphql).toMatchInlineSnapshot(`
      {
        "freeAbove": undefined,
        "price": {
          "centAmount": 500,
          "currencyCode": "USD",
        },
        "tiers": [],
      }
    `);
  });
});
