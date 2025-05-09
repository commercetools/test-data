import type { TStandalonePriceDraft } from '../../../types';
import g123Qr20154 from './g-123-qr-2015-4';

describe(`with g123Qr20154 preset`, () => {
  it(`should return a g123Qr20154 preset`, () => {
    const g123Qr20154Preset = g123Qr20154().build<TStandalonePriceDraft>();
    expect(g123Qr20154Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "g123-qr-2015-4",
        "sku": "g123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1000000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a g123Qr20154 preset when built for graphql`, () => {
    const g123Qr20154PresetGraphql =
      g123Qr20154().buildGraphql<TStandalonePriceDraft>();
    expect(g123Qr20154PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "g123-qr-2015-4",
        "sku": "g123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1000000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
