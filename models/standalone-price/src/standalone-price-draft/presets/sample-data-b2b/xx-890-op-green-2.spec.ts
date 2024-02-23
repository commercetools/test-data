import type { TStandalonePriceDraft } from '../../../types';
import xx890OpGreen2 from './xx-890-op-green-2';

describe(`with xx890OpGreen2 preset`, () => {
  it(`should return a xx890OpGreen2 preset`, () => {
    const xx890OpGreen2Preset = xx890OpGreen2().build<TStandalonePriceDraft>();
    expect(xx890OpGreen2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-green-2",
        "sku": "xx890-op-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 6050000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a xx890OpGreen2 preset when built for graphql`, () => {
    const xx890OpGreen2PresetGraphql =
      xx890OpGreen2().buildGraphql<TStandalonePriceDraft>();
    expect(xx890OpGreen2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-green-2",
        "sku": "xx890-op-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 6050000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
