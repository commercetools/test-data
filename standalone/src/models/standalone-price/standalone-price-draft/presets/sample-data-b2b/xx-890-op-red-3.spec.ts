import type { TStandalonePriceDraft } from '../../../types';
import xx890OpRed3 from './xx-890-op-red-3';

describe(`with xx890OpRed3 preset`, () => {
  it(`should return a xx890OpRed3 preset`, () => {
    const xx890OpRed3Preset = xx890OpRed3().build<TStandalonePriceDraft>();
    expect(xx890OpRed3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-red-3",
        "sku": "xx890-op-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 6600000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a xx890OpRed3 preset when built for graphql`, () => {
    const xx890OpRed3PresetGraphql =
      xx890OpRed3().buildGraphql<TStandalonePriceDraft>();
    expect(xx890OpRed3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-red-3",
        "sku": "xx890-op-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 6600000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
