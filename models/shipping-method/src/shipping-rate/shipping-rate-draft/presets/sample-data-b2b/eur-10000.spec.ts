import type { TShippingRateDraft } from '../../../types';
import eur10000 from './eur-10000';

describe(`with eur10000 preset`, () => {
  it(`should return a eur10000 preset`, () => {
    const eur1000Preset = eur10000().build<TShippingRateDraft>();
    expect(eur1000Preset).toMatchInlineSnapshot(`
      {
        "freeAbove": {
          "centAmount": 1000000,
          "currencyCode": "EUR",
        },
        "price": {
          "centAmount": 10000,
          "currencyCode": "EUR",
        },
        "tiers": [],
      }
    `);
  });

  it(`should return a eur10000 preset when built for graphql`, () => {
    const eur1000PresetGraphql = eur10000().buildGraphql<TShippingRateDraft>();
    expect(eur1000PresetGraphql).toMatchInlineSnapshot(`
      {
        "freeAbove": {
          "centAmount": 1000000,
          "currencyCode": "EUR",
        },
        "price": {
          "centAmount": 10000,
          "currencyCode": "EUR",
        },
        "tiers": [],
      }
    `);
  });
});
