import type { TStandalonePriceDraft } from '../../../types';
import xx890OpBlue2 from './xx-890-op-blue-2';

describe(`with xx890OpBlue2 preset`, () => {
  it(`should return a xx890OpBlue2 preset`, () => {
    const xx890OpBlue2Preset = xx890OpBlue2().build<TStandalonePriceDraft>();
    expect(xx890OpBlue2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-blue-2",
        "sku": "xx890-op-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 5500000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a xx890OpBlue2 preset when built for graphql`, () => {
    const xx890OpBlue2PresetGraphql =
      xx890OpBlue2().buildGraphql<TStandalonePriceDraft>();
    expect(xx890OpBlue2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-blue-2",
        "sku": "xx890-op-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 5500000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
