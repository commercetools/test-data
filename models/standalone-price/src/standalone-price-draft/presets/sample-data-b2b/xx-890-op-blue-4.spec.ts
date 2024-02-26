import type { TStandalonePriceDraft } from '../../../types';
import xx890OpBlue4 from './xx-890-op-blue-4';

describe(`with xx890OpBlue4 preset`, () => {
  it(`should return a xx890OpBlue4 preset`, () => {
    const xx890OpBlue4Preset = xx890OpBlue4().build<TStandalonePriceDraft>();
    expect(xx890OpBlue4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-blue-4",
        "sku": "xx890-op-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 5000000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a xx890OpBlue4 preset when built for graphql`, () => {
    const xx890OpBlue4PresetGraphql =
      xx890OpBlue4().buildGraphql<TStandalonePriceDraft>();
    expect(xx890OpBlue4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-blue-4",
        "sku": "xx890-op-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 5000000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
