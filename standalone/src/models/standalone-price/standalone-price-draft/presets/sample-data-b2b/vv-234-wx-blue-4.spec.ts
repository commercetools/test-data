import type { TStandalonePriceDraft } from '../../../types';
import vv234WxBlue4 from './vv-234-wx-blue-4';

describe(`with vv234WxBlue4 preset`, () => {
  it(`should return a vv234WxBlue4 preset`, () => {
    const vv234WxBlue4Preset = vv234WxBlue4().build<TStandalonePriceDraft>();
    expect(vv234WxBlue4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "vv234-wx-blue-4",
        "recurrencePolicy": undefined,
        "sku": "vv234-wx-blue",
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

  it(`should return a vv234WxBlue4 preset when built for graphql`, () => {
    const vv234WxBlue4PresetGraphql =
      vv234WxBlue4().buildGraphql<TStandalonePriceDraft>();
    expect(vv234WxBlue4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "vv234-wx-blue-4",
        "recurrencePolicy": undefined,
        "sku": "vv234-wx-blue",
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
