import type { TStandalonePriceDraft } from '../../../types';
import bbb234WxBlue3 from './bbb-234-wx-blue-3';

describe(`with bbb234WxBlue3 preset`, () => {
  it(`should return a bbb234WxBlue3 preset`, () => {
    const bbb234WxBlue3Preset = bbb234WxBlue3().build<TStandalonePriceDraft>();
    expect(bbb234WxBlue3Preset).toMatchInlineSnapshot(`
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
        "key": "bbb234-wx-blue-3",
        "sku": "bbb234-wx-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 11440000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a bbb234WxBlue3 preset when built for graphql`, () => {
    const bbb234WxBlue3PresetGraphql =
      bbb234WxBlue3().buildGraphql<TStandalonePriceDraft>();
    expect(bbb234WxBlue3PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "bbb234-wx-blue-3",
        "sku": "bbb234-wx-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 11440000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
