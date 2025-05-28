import type { TStandalonePriceDraft } from '../../../types';
import vv234WxBlue3 from './vv-234-wx-blue-3';

describe(`with vv234WxBlue3 preset`, () => {
  it(`should return a vv234WxBlue3 preset`, () => {
    const vv234WxBlue3Preset = vv234WxBlue3().build<TStandalonePriceDraft>();
    expect(vv234WxBlue3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "vv234-wx-blue-3",
        "recurrencePolicy": undefined,
        "sku": "vv234-wx-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 5720000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a vv234WxBlue3 preset when built for graphql`, () => {
    const vv234WxBlue3PresetGraphql =
      vv234WxBlue3().buildGraphql<TStandalonePriceDraft>();
    expect(vv234WxBlue3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "vv234-wx-blue-3",
        "recurrencePolicy": undefined,
        "sku": "vv234-wx-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 5720000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
