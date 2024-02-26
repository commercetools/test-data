import type { TStandalonePriceDraft } from '../../../types';
import xx890OpBlue3 from './xx-890-op-blue-3';

describe(`with xx890OpBlue3 preset`, () => {
  it(`should return a xx890OpBlue3 preset`, () => {
    const xx890OpBlue3Preset = xx890OpBlue3().build<TStandalonePriceDraft>();
    expect(xx890OpBlue3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-blue-3",
        "sku": "xx890-op-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 7150000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a xx890OpBlue3 preset when built for graphql`, () => {
    const xx890OpBlue3PresetGraphql =
      xx890OpBlue3().buildGraphql<TStandalonePriceDraft>();
    expect(xx890OpBlue3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-blue-3",
        "sku": "xx890-op-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 7150000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
