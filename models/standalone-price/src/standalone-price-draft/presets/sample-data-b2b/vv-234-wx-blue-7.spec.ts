import type { TStandalonePriceDraft } from '../../../types';
import vv234WxBlue7 from './vv-234-wx-blue-7';

describe(`with vv234WxBlue7 preset`, () => {
  it(`should return a vv234WxBlue7 preset`, () => {
    const vv234WxBlue7Preset = vv234WxBlue7().build<TStandalonePriceDraft>();
    expect(vv234WxBlue7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "vv234-wx-blue-7",
        "sku": "vv234-wx-blue",
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

  it(`should return a vv234WxBlue7 preset when built for graphql`, () => {
    const vv234WxBlue7PresetGraphql =
      vv234WxBlue7().buildGraphql<TStandalonePriceDraft>();
    expect(vv234WxBlue7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "vv234-wx-blue-7",
        "sku": "vv234-wx-blue",
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
