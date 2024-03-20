import type { TStandalonePriceDraft } from '../../../types';
import xx890OpBlue1 from './xx-890-op-blue-1';

describe(`with xx890OpBlue1 preset`, () => {
  it(`should return a xx890OpBlue1 preset`, () => {
    const xx890OpBlue1Preset = xx890OpBlue1().build<TStandalonePriceDraft>();
    expect(xx890OpBlue1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-blue-1",
        "sku": "xx890-op-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 6050000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a xx890OpBlue1 preset when built for graphql`, () => {
    const xx890OpBlue1PresetGraphql =
      xx890OpBlue1().buildGraphql<TStandalonePriceDraft>();
    expect(xx890OpBlue1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "xx890-op-blue-1",
        "sku": "xx890-op-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 6050000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
