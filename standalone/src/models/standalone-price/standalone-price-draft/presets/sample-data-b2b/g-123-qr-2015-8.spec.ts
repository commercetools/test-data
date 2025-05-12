import type { TStandalonePriceDraft } from '../../../types';
import g123Qr20158 from './g-123-qr-2015-8';

describe(`with g123Qr20158 preset`, () => {
  it(`should return a g123Qr20158 preset`, () => {
    const g123Qr20158Preset = g123Qr20158().build<TStandalonePriceDraft>();
    expect(g123Qr20158Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "g123-qr-2015-8",
        "sku": "g123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1100000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a g123Qr20158 preset when built for graphql`, () => {
    const g123Qr20158PresetGraphql =
      g123Qr20158().buildGraphql<TStandalonePriceDraft>();
    expect(g123Qr20158PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "g123-qr-2015-8",
        "sku": "g123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1100000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
