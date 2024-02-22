import type { TStandalonePriceDraft } from '../../../types';
import vv234WxGreen8 from './vv-234-wx-green-8';

describe(`with vv234WxGreen8 preset`, () => {
  it(`should return a vv234WxGreen8 preset`, () => {
    const vv234WxGreen8Preset = vv234WxGreen8().build<TStandalonePriceDraft>();
    expect(vv234WxGreen8Preset).toMatchInlineSnapshot(`
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
        "key": "vv234-wx-green-8",
        "sku": "vv234-wx-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4400000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a vv234WxGreen8 preset when built for graphql`, () => {
    const vv234WxGreen8PresetGraphql =
      vv234WxGreen8().buildGraphql<TStandalonePriceDraft>();
    expect(vv234WxGreen8PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "vv234-wx-green-8",
        "sku": "vv234-wx-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4400000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
