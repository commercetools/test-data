import type { TStandalonePriceDraft } from '../../../types';
import bbb234WxBlue6 from './bbb-234-wx-blue-6';

describe(`with bbb234WxBlue6 preset`, () => {
  it(`should return a bbb234WxBlue6 preset`, () => {
    const bbb234WxBlue6Preset = bbb234WxBlue6().build<TStandalonePriceDraft>();
    expect(bbb234WxBlue6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bbb234-wx-blue-6",
        "sku": "bbb234-wx-blue",
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

  it(`should return a bbb234WxBlue6 preset when built for graphql`, () => {
    const bbb234WxBlue6PresetGraphql =
      bbb234WxBlue6().buildGraphql<TStandalonePriceDraft>();
    expect(bbb234WxBlue6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bbb234-wx-blue-6",
        "sku": "bbb234-wx-blue",
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
