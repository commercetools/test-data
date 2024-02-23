import type { TStandalonePriceDraft } from '../../../types';
import bbb234WxBlue2 from './bbb-234-wx-blue-2';

describe(`with bbb234WxBlue2 preset`, () => {
  it(`should return a bbb234WxBlue2 preset`, () => {
    const bbb234WxBlue2Preset = bbb234WxBlue2().build<TStandalonePriceDraft>();
    expect(bbb234WxBlue2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bbb234-wx-blue-2",
        "sku": "bbb234-wx-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 8800000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a bbb234WxBlue2 preset when built for graphql`, () => {
    const bbb234WxBlue2PresetGraphql =
      bbb234WxBlue2().buildGraphql<TStandalonePriceDraft>();
    expect(bbb234WxBlue2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bbb234-wx-blue-2",
        "sku": "bbb234-wx-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 8800000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
