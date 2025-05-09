import type { TStandalonePriceDraft } from '../../../types';
import vv234WxRed3 from './vv-234-wx-red-3';

describe(`with vv234WxRed3 preset`, () => {
  it(`should return a vv234WxRed3 preset`, () => {
    const vv234WxRed3Preset = vv234WxRed3().build<TStandalonePriceDraft>();
    expect(vv234WxRed3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "vv234-wx-red-3",
        "sku": "vv234-wx-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 5280000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a vv234WxRed3 preset when built for graphql`, () => {
    const vv234WxRed3PresetGraphql =
      vv234WxRed3().buildGraphql<TStandalonePriceDraft>();
    expect(vv234WxRed3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "vv234-wx-red-3",
        "sku": "vv234-wx-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 5280000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
