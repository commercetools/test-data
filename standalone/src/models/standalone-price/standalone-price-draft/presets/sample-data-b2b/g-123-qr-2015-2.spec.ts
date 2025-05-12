import type { TStandalonePriceDraft } from '../../../types';
import g123Qr20152 from './g-123-qr-2015-2';

describe(`with g123Qr20152 preset`, () => {
  it(`should return a g123Qr20152 preset`, () => {
    const g123Qr20152Preset = g123Qr20152().build<TStandalonePriceDraft>();
    expect(g123Qr20152Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "g123-qr-2015-2",
        "sku": "g123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 990000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a g123Qr20152 preset when built for graphql`, () => {
    const g123Qr20152PresetGraphql =
      g123Qr20152().buildGraphql<TStandalonePriceDraft>();
    expect(g123Qr20152PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "g123-qr-2015-2",
        "sku": "g123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 990000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
