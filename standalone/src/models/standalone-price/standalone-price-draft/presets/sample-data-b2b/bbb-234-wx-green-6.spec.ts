import type { TStandalonePriceDraft } from '../../../types';
import bbb234WxGreen6 from './bbb-234-wx-green-6';

describe(`with bbb234WxGreen6 preset`, () => {
  it(`should return a bbb234WxGreen6 preset`, () => {
    const bbb234WxGreen6Preset =
      bbb234WxGreen6().build<TStandalonePriceDraft>();
    expect(bbb234WxGreen6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bbb234-wx-green-6",
        "sku": "bbb234-wx-green",
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

  it(`should return a bbb234WxGreen6 preset when built for graphql`, () => {
    const bbb234WxGreen6PresetGraphql =
      bbb234WxGreen6().buildGraphql<TStandalonePriceDraft>();
    expect(bbb234WxGreen6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bbb234-wx-green-6",
        "sku": "bbb234-wx-green",
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
