import type { TStandalonePriceDraft } from '../../../types';
import vv234WxRed2 from './vv-234-wx-red-2';

describe(`with vv234WxRed2 preset`, () => {
  it(`should return a vv234WxRed2 preset`, () => {
    const vv234WxRed2Preset = vv234WxRed2().build<TStandalonePriceDraft>();
    expect(vv234WxRed2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "vv234-wx-red-2",
        "sku": "vv234-wx-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3960000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a vv234WxRed2 preset when built for graphql`, () => {
    const vv234WxRed2PresetGraphql =
      vv234WxRed2().buildGraphql<TStandalonePriceDraft>();
    expect(vv234WxRed2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "vv234-wx-red-2",
        "sku": "vv234-wx-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3960000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
