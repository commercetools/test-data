import type { TStandalonePriceDraft } from '../../../types';
import bbb234WxGreen8 from './bbb-234-wx-green-8';

describe(`with bbb234WxGreen8 preset`, () => {
  it(`should return a bbb234WxGreen8 preset`, () => {
    const bbb234WxGreen8Preset =
      bbb234WxGreen8().build<TStandalonePriceDraft>();
    expect(bbb234WxGreen8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bbb234-wx-green-8",
        "sku": "bbb234-wx-green",
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

  it(`should return a bbb234WxGreen8 preset when built for graphql`, () => {
    const bbb234WxGreen8PresetGraphql =
      bbb234WxGreen8().buildGraphql<TStandalonePriceDraft>();
    expect(bbb234WxGreen8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bbb234-wx-green-8",
        "sku": "bbb234-wx-green",
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
