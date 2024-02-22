import type { TStandalonePriceDraft } from '../../../types';
import bbb234WxRed8 from './bbb-234-wx-red-8';

describe(`with bbb234WxRed8 preset`, () => {
  it(`should return a bbb234WxRed8 preset`, () => {
    const bbb234WxRed8Preset = bbb234WxRed8().build<TStandalonePriceDraft>();
    expect(bbb234WxRed8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bbb234-wx-red-8",
        "sku": "bbb234-wx-red",
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

  it(`should return a bbb234WxRed8 preset when built for graphql`, () => {
    const bbb234WxRed8PresetGraphql =
      bbb234WxRed8().buildGraphql<TStandalonePriceDraft>();
    expect(bbb234WxRed8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bbb234-wx-red-8",
        "sku": "bbb234-wx-red",
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
