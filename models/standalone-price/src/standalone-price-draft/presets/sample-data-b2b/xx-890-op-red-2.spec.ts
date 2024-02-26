import type { TStandalonePriceDraft } from '../../../types';
import xx890OpRed2 from './xx-890-op-red-2';

describe(`with xx890OpRed2 preset`, () => {
  it(`should return a xx890OpRed2 preset`, () => {
    const xx890OpRed2Preset = xx890OpRed2().build<TStandalonePriceDraft>();
    expect(xx890OpRed2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-red-2",
        "sku": "xx890-op-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4950000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a xx890OpRed2 preset when built for graphql`, () => {
    const xx890OpRed2PresetGraphql =
      xx890OpRed2().buildGraphql<TStandalonePriceDraft>();
    expect(xx890OpRed2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-red-2",
        "sku": "xx890-op-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4950000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
