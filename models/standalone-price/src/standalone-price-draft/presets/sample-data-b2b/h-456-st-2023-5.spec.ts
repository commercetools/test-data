import type { TStandalonePriceDraft } from '../../../types';
import h456St20235 from './h-456-st-2023-5';

describe(`with h456St20235 preset`, () => {
  it(`should return a h456St20235 preset`, () => {
    const h456St20235Preset = h456St20235().build<TStandalonePriceDraft>();
    expect(h456St20235Preset).toMatchInlineSnapshot(`
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
        "key": "h456-st-2023-5",
        "sku": "h456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1080000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a h456St20235 preset when built for graphql`, () => {
    const h456St20235PresetGraphql =
      h456St20235().buildGraphql<TStandalonePriceDraft>();
    expect(h456St20235PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "h456-st-2023-5",
        "sku": "h456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1080000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
