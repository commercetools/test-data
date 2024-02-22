import type { TStandalonePriceDraft } from '../../../types';
import bb456St20235 from './bb-456-st-2023-5';

describe(`with bb456St20235 preset`, () => {
  it(`should return a bb456St20235 preset`, () => {
    const bb456St20235Preset = bb456St20235().build<TStandalonePriceDraft>();
    expect(bb456St20235Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bb456-st-2023-5",
        "sku": "bb456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1620000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a bb456St20235 preset when built for graphql`, () => {
    const bb456St20235PresetGraphql =
      bb456St20235().buildGraphql<TStandalonePriceDraft>();
    expect(bb456St20235PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bb456-st-2023-5",
        "sku": "bb456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1620000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
