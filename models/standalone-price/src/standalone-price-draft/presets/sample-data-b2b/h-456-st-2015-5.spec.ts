import type { TStandalonePriceDraft } from '../../../types';
import h456St20155 from './h-456-st-2015-5';

describe(`with h456St20155 preset`, () => {
  it(`should return a h456St20155 preset`, () => {
    const h456St20155Preset = h456St20155().build<TStandalonePriceDraft>();
    expect(h456St20155Preset).toMatchInlineSnapshot(`
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
        "key": "h456-st-2015-5",
        "sku": "h456-st-2015",
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

  it(`should return a h456St20155 preset when built for graphql`, () => {
    const h456St20155PresetGraphql =
      h456St20155().buildGraphql<TStandalonePriceDraft>();
    expect(h456St20155PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "h456-st-2015-5",
        "sku": "h456-st-2015",
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
