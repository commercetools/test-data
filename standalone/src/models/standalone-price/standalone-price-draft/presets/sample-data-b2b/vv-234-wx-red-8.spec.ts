import type { TStandalonePriceDraft } from '../../../types';
import vv234WxRed8 from './vv-234-wx-red-8';

describe(`with vv234WxRed8 preset`, () => {
  it(`should return a vv234WxRed8 preset`, () => {
    const vv234WxRed8Preset = vv234WxRed8().build<TStandalonePriceDraft>();
    expect(vv234WxRed8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "vv234-wx-red-8",
        "recurrencePolicy": undefined,
        "sku": "vv234-wx-red",
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

  it(`should return a vv234WxRed8 preset when built for graphql`, () => {
    const vv234WxRed8PresetGraphql =
      vv234WxRed8().buildGraphql<TStandalonePriceDraft>();
    expect(vv234WxRed8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "vv234-wx-red-8",
        "recurrencePolicy": undefined,
        "sku": "vv234-wx-red",
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
