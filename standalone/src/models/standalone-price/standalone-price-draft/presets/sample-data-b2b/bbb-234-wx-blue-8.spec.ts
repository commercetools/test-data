import type { TStandalonePriceDraft } from '../../../types';
import bbb234WxBlue8 from './bbb-234-wx-blue-8';

describe(`with bbb234WxBlue8 preset`, () => {
  it(`should return a bbb234WxBlue8 preset`, () => {
    const bbb234WxBlue8Preset = bbb234WxBlue8().build<TStandalonePriceDraft>();
    expect(bbb234WxBlue8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bbb234-wx-blue-8",
        "sku": "bbb234-wx-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 8800000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a bbb234WxBlue8 preset when built for graphql`, () => {
    const bbb234WxBlue8PresetGraphql =
      bbb234WxBlue8().buildGraphql<TStandalonePriceDraft>();
    expect(bbb234WxBlue8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bbb234-wx-blue-8",
        "sku": "bbb234-wx-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 8800000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
