import type { TStandalonePriceDraft } from '../../../types';
import vv234WxGreen7 from './vv-234-wx-green-7';

describe(`with vv234WxGreen7 preset`, () => {
  it(`should return a vv234WxGreen7 preset`, () => {
    const vv234WxGreen7Preset = vv234WxGreen7().build<TStandalonePriceDraft>();
    expect(vv234WxGreen7Preset).toMatchInlineSnapshot(`
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
        "key": "vv234-wx-green-7",
        "sku": "vv234-wx-green",
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

  it(`should return a vv234WxGreen7 preset when built for graphql`, () => {
    const vv234WxGreen7PresetGraphql =
      vv234WxGreen7().buildGraphql<TStandalonePriceDraft>();
    expect(vv234WxGreen7PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "vv234-wx-green-7",
        "sku": "vv234-wx-green",
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
