import type { TStandalonePriceDraft } from '../../../types';
import g123Qr20151 from './g-123-qr-2015-1';

describe(`with g123Qr20151 preset`, () => {
  it(`should return a g123Qr20151 preset`, () => {
    const g123Qr20151Preset = g123Qr20151().build<TStandalonePriceDraft>();
    expect(g123Qr20151Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "g123-qr-2015-1",
        "recurrencePolicy": undefined,
        "sku": "g123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1100000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a g123Qr20151 preset when built for graphql`, () => {
    const g123Qr20151PresetGraphql =
      g123Qr20151().buildGraphql<TStandalonePriceDraft>();
    expect(g123Qr20151PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "g123-qr-2015-1",
        "recurrencePolicy": undefined,
        "sku": "g123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1100000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
