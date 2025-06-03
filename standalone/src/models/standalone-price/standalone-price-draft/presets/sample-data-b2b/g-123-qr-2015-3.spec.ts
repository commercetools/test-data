import type { TStandalonePriceDraft } from '../../../types';
import g123Qr20153 from './g-123-qr-2015-3';

describe(`with g123Qr20153 preset`, () => {
  it(`should return a g123Qr20153 preset`, () => {
    const g123Qr20153Preset = g123Qr20153().build<TStandalonePriceDraft>();
    expect(g123Qr20153Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "g123-qr-2015-3",
        "recurrencePolicy": undefined,
        "sku": "g123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1320000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a g123Qr20153 preset when built for graphql`, () => {
    const g123Qr20153PresetGraphql =
      g123Qr20153().buildGraphql<TStandalonePriceDraft>();
    expect(g123Qr20153PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "g123-qr-2015-3",
        "recurrencePolicy": undefined,
        "sku": "g123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1320000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
