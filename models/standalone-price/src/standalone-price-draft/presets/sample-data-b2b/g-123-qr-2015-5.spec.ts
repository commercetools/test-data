import type { TStandalonePriceDraft } from '../../../types';
import g123Qr20155 from './g-123-qr-2015-5';

describe(`with g123Qr20155 preset`, () => {
  it(`should return a g123Qr20155 preset`, () => {
    const g123Qr20155Preset = g123Qr20155().build<TStandalonePriceDraft>();
    expect(g123Qr20155Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "g123-qr-2015-5",
        "sku": "g123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 900000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a g123Qr20155 preset when built for graphql`, () => {
    const g123Qr20155PresetGraphql =
      g123Qr20155().buildGraphql<TStandalonePriceDraft>();
    expect(g123Qr20155PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "g123-qr-2015-5",
        "sku": "g123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 900000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
