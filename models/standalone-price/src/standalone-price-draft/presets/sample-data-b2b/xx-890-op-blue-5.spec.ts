import type { TStandalonePriceDraft } from '../../../types';
import xx890OpBlue5 from './xx-890-op-blue-5';

describe(`with xx890OpBlue5 preset`, () => {
  it(`should return a xx890OpBlue5 preset`, () => {
    const xx890OpBlue5Preset = xx890OpBlue5().build<TStandalonePriceDraft>();
    expect(xx890OpBlue5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-blue-5",
        "sku": "xx890-op-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4500000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a xx890OpBlue5 preset when built for graphql`, () => {
    const xx890OpBlue5PresetGraphql =
      xx890OpBlue5().buildGraphql<TStandalonePriceDraft>();
    expect(xx890OpBlue5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-blue-5",
        "sku": "xx890-op-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4500000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
