import type { TStandalonePriceDraft } from '../../../types';
import hhh234WxRed1 from './hhh-234-wx-red-1';

describe(`with hhh234WxRed1 preset`, () => {
  it(`should return a hhh234WxRed1 preset`, () => {
    const hhh234WxRed1Preset = hhh234WxRed1().build<TStandalonePriceDraft>();
    expect(hhh234WxRed1Preset).toMatchInlineSnapshot(`
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
        "key": "hhh234-wx-red-1",
        "sku": "hhh234-wx-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 11000000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a hhh234WxRed1 preset when built for graphql`, () => {
    const hhh234WxRed1PresetGraphql =
      hhh234WxRed1().buildGraphql<TStandalonePriceDraft>();
    expect(hhh234WxRed1PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "hhh234-wx-red-1",
        "sku": "hhh234-wx-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 11000000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
