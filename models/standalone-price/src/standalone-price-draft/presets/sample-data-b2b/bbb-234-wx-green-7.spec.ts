import type { TStandalonePriceDraft } from '../../../types';
import bbb234WxGreen7 from './bbb-234-wx-green-7';

describe(`with bbb234WxGreen7 preset`, () => {
  it(`should return a bbb234WxGreen7 preset`, () => {
    const bbb234WxGreen7Preset =
      bbb234WxGreen7().build<TStandalonePriceDraft>();
    expect(bbb234WxGreen7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bbb234-wx-green-7",
        "sku": "bbb234-wx-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 9600000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a bbb234WxGreen7 preset when built for graphql`, () => {
    const bbb234WxGreen7PresetGraphql =
      bbb234WxGreen7().buildGraphql<TStandalonePriceDraft>();
    expect(bbb234WxGreen7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bbb234-wx-green-7",
        "sku": "bbb234-wx-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 9600000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
