import type { TStandalonePriceDraft } from '../../../types';
import vv234WxRed1 from './vv-234-wx-red-1';

describe(`with vv234WxRed1 preset`, () => {
  it(`should return a vv234WxRed1 preset`, () => {
    const vv234WxRed1Preset = vv234WxRed1().build<TStandalonePriceDraft>();
    expect(vv234WxRed1Preset).toMatchInlineSnapshot(`
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
        "key": "vv234-wx-red-1",
        "sku": "vv234-wx-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4400000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a vv234WxRed1 preset when built for graphql`, () => {
    const vv234WxRed1PresetGraphql =
      vv234WxRed1().buildGraphql<TStandalonePriceDraft>();
    expect(vv234WxRed1PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "vv234-wx-red-1",
        "sku": "vv234-wx-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4400000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
