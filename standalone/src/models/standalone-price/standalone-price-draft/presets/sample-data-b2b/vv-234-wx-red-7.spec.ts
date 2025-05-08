import type { TStandalonePriceDraft } from '../../../types';
import vv234WxRed7 from './vv-234-wx-red-7';

describe(`with vv234WxRed7 preset`, () => {
  it(`should return a vv234WxRed7 preset`, () => {
    const vv234WxRed7Preset = vv234WxRed7().build<TStandalonePriceDraft>();
    expect(vv234WxRed7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "vv234-wx-red-7",
        "sku": "vv234-wx-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4800000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a vv234WxRed7 preset when built for graphql`, () => {
    const vv234WxRed7PresetGraphql =
      vv234WxRed7().buildGraphql<TStandalonePriceDraft>();
    expect(vv234WxRed7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "vv234-wx-red-7",
        "sku": "vv234-wx-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4800000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
