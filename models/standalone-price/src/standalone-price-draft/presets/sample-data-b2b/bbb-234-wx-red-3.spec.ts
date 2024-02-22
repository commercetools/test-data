import type { TStandalonePriceDraft } from '../../../types';
import bbb234WxRed3 from './bbb-234-wx-red-3';

describe(`with bbb234WxRed3 preset`, () => {
  it(`should return a bbb234WxRed3 preset`, () => {
    const bbb234WxRed3Preset = bbb234WxRed3().build<TStandalonePriceDraft>();
    expect(bbb234WxRed3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bbb234-wx-red-3",
        "sku": "bbb234-wx-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 10560000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a bbb234WxRed3 preset when built for graphql`, () => {
    const bbb234WxRed3PresetGraphql =
      bbb234WxRed3().buildGraphql<TStandalonePriceDraft>();
    expect(bbb234WxRed3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bbb234-wx-red-3",
        "sku": "bbb234-wx-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 10560000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
