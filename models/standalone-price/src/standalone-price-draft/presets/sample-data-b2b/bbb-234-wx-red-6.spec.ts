import type { TStandalonePriceDraft } from '../../../types';
import bbb234WxRed6 from './bbb-234-wx-red-6';

describe(`with bbb234WxRed6 preset`, () => {
  it(`should return a bbb234WxRed6 preset`, () => {
    const bbb234WxRed6Preset = bbb234WxRed6().build<TStandalonePriceDraft>();
    expect(bbb234WxRed6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bbb234-wx-red-6",
        "sku": "bbb234-wx-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 6400000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a bbb234WxRed6 preset when built for graphql`, () => {
    const bbb234WxRed6PresetGraphql =
      bbb234WxRed6().buildGraphql<TStandalonePriceDraft>();
    expect(bbb234WxRed6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bbb234-wx-red-6",
        "sku": "bbb234-wx-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 6400000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
