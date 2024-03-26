import type { TShippingRateDraft } from '../../../types';
import eur1000 from './eur-1000';

describe(`with eur1000 preset`, () => {
  it(`should return a eur1000 preset`, () => {
    const eur1000Preset = eur1000().build<TShippingRateDraft>();
    expect(eur1000Preset).toMatchInlineSnapshot(`
      {
        "freeAbove": {
          "centAmount": 10000,
          "currencyCode": "EUR",
        },
        "price": {
          "centAmount": 1000,
          "currencyCode": "EUR",
        },
        "tiers": [],
      }
    `);
  });

  it(`should return a eur1000 preset when built for graphql`, () => {
    const eur1000PresetGraphql = eur1000().buildGraphql<TShippingRateDraft>();
    expect(eur1000PresetGraphql).toMatchInlineSnapshot(`
      {
        "freeAbove": {
          "centAmount": 10000,
          "currencyCode": "EUR",
        },
        "price": {
          "centAmount": 1000,
          "currencyCode": "EUR",
        },
        "tiers": [],
      }
    `);
  });
});
