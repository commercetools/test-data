import type { TStandalonePriceDraft } from '../../../types';
import vv234WxBlue8 from './vv-234-wx-blue-8';

describe(`with vv234WxBlue8 preset`, () => {
  it(`should return a vv234WxBlue8 preset`, () => {
    const vv234WxBlue8Preset = vv234WxBlue8().build<TStandalonePriceDraft>();
    expect(vv234WxBlue8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "vv234-wx-blue-8",
        "recurrencePolicy": undefined,
        "sku": "vv234-wx-blue",
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

  it(`should return a vv234WxBlue8 preset when built for graphql`, () => {
    const vv234WxBlue8PresetGraphql =
      vv234WxBlue8().buildGraphql<TStandalonePriceDraft>();
    expect(vv234WxBlue8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "vv234-wx-blue-8",
        "recurrencePolicy": undefined,
        "sku": "vv234-wx-blue",
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
