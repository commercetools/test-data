import type { TStandalonePriceDraft } from '../../../types';
import bbb234WxGreen1 from './bbb-234-wx-green-1';

describe(`with bbb234WxGreen1 preset`, () => {
  it(`should return a bbb234WxGreen1 preset`, () => {
    const bbb234WxGreen1Preset =
      bbb234WxGreen1().build<TStandalonePriceDraft>();
    expect(bbb234WxGreen1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bbb234-wx-green-1",
        "sku": "bbb234-wx-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 10560000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a bbb234WxGreen1 preset when built for graphql`, () => {
    const bbb234WxGreen1PresetGraphql =
      bbb234WxGreen1().buildGraphql<TStandalonePriceDraft>();
    expect(bbb234WxGreen1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bbb234-wx-green-1",
        "sku": "bbb234-wx-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 10560000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
