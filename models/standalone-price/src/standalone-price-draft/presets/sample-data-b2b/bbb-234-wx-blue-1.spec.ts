import type { TStandalonePriceDraft } from '../../../types';
import bbb234WxBlue1 from './bbb-234-wx-blue-1';

describe(`with bbb234WxBlue1 preset`, () => {
  it(`should return a bbb234WxBlue1 preset`, () => {
    const bbb234WxBlue1Preset = bbb234WxBlue1().build<TStandalonePriceDraft>();
    expect(bbb234WxBlue1Preset).toMatchInlineSnapshot(`
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
        "key": "bbb234-wx-blue-1",
        "sku": "bbb234-wx-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 9680000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a bbb234WxBlue1 preset when built for graphql`, () => {
    const bbb234WxBlue1PresetGraphql =
      bbb234WxBlue1().buildGraphql<TStandalonePriceDraft>();
    expect(bbb234WxBlue1PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "bbb234-wx-blue-1",
        "sku": "bbb234-wx-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 9680000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
