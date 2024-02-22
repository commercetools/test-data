import type { TStandalonePriceDraft } from '../../../types';
import bbb234WxRed1 from './bbb-234-wx-red-1';

describe(`with bbb234WxRed1 preset`, () => {
  it(`should return a bbb234WxRed1 preset`, () => {
    const bbb234WxRed1Preset = bbb234WxRed1().build<TStandalonePriceDraft>();
    expect(bbb234WxRed1Preset).toMatchInlineSnapshot(`
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
        "key": "bbb234-wx-red-1",
        "sku": "bbb234-wx-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 8800000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a bbb234WxRed1 preset when built for graphql`, () => {
    const bbb234WxRed1PresetGraphql =
      bbb234WxRed1().buildGraphql<TStandalonePriceDraft>();
    expect(bbb234WxRed1PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "bbb234-wx-red-1",
        "sku": "bbb234-wx-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 8800000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
