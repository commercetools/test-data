import type { TStandalonePriceDraft } from '../../../types';
import g123Qr20193 from './g-123-qr-2019-3';

describe(`with g123Qr20193 preset`, () => {
  it(`should return a g123Qr20193 preset`, () => {
    const g123Qr20193Preset = g123Qr20193().build<TStandalonePriceDraft>();
    expect(g123Qr20193Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "g123-qr-2019-3",
        "sku": "g123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1430000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a g123Qr20193 preset when built for graphql`, () => {
    const g123Qr20193PresetGraphql =
      g123Qr20193().buildGraphql<TStandalonePriceDraft>();
    expect(g123Qr20193PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "g123-qr-2019-3",
        "sku": "g123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1430000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
