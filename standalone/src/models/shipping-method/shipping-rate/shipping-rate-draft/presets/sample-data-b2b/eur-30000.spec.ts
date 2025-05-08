import type { TShippingRateDraft } from '../../../types';
import eur30000 from './eur-30000';

describe(`with eur30000 preset`, () => {
  it(`should return a eur30000 preset`, () => {
    const eur30000Preset = eur30000().build<TShippingRateDraft>();
    expect(eur30000Preset).toMatchInlineSnapshot(`
      {
        "freeAbove": {
          "centAmount": 1500000,
          "currencyCode": "EUR",
        },
        "price": {
          "centAmount": 30000,
          "currencyCode": "EUR",
        },
        "tiers": [],
      }
    `);
  });

  it(`should return a eur30000 preset when built for graphql`, () => {
    const eur30000PresetGraphql = eur30000().buildGraphql<TShippingRateDraft>();
    expect(eur30000PresetGraphql).toMatchInlineSnapshot(`
      {
        "freeAbove": {
          "centAmount": 1500000,
          "currencyCode": "EUR",
        },
        "price": {
          "centAmount": 30000,
          "currencyCode": "EUR",
        },
        "tiers": [],
      }
    `);
  });
});
