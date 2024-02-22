import type { TStandalonePriceDraft } from '../../../types';
import vv234WxGreen4 from './vv-234-wx-green-4';

describe(`with vv234WxGreen4 preset`, () => {
  it(`should return a vv234WxGreen4 preset`, () => {
    const vv234WxGreen4Preset = vv234WxGreen4().build<TStandalonePriceDraft>();
    expect(vv234WxGreen4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "vv234-wx-green-4",
        "sku": "vv234-wx-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4000000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a vv234WxGreen4 preset when built for graphql`, () => {
    const vv234WxGreen4PresetGraphql =
      vv234WxGreen4().buildGraphql<TStandalonePriceDraft>();
    expect(vv234WxGreen4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "vv234-wx-green-4",
        "sku": "vv234-wx-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4000000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
