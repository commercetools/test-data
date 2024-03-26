import type { TShippingRateDraft } from '../../../types';
import eur500 from './eur-500';

describe(`with eur500 preset`, () => {
  it(`should return a eur500 preset`, () => {
    const eur500Preset = eur500().build<TShippingRateDraft>();
    expect(eur500Preset).toMatchInlineSnapshot(`
      {
        "freeAbove": {
          "centAmount": 5000,
          "currencyCode": "EUR",
        },
        "price": {
          "centAmount": 500,
          "currencyCode": "EUR",
        },
        "tiers": [],
      }
    `);
  });

  it(`should return a eur500 preset when built for graphql`, () => {
    const eur500PresetGraphql = eur500().buildGraphql<TShippingRateDraft>();
    expect(eur500PresetGraphql).toMatchInlineSnapshot(`
      {
        "freeAbove": {
          "centAmount": 5000,
          "currencyCode": "EUR",
        },
        "price": {
          "centAmount": 500,
          "currencyCode": "EUR",
        },
        "tiers": [],
      }
    `);
  });
});
