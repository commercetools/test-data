import type { TStandalonePriceDraft } from '../../../types';
import bbb234WxGreen4 from './bbb-234-wx-green-4';

describe(`with bbb234WxGreen4 preset`, () => {
  it(`should return a bbb234WxGreen4 preset`, () => {
    const bbb234WxGreen4Preset =
      bbb234WxGreen4().build<TStandalonePriceDraft>();
    expect(bbb234WxGreen4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bbb234-wx-green-4",
        "sku": "bbb234-wx-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 8000000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a bbb234WxGreen4 preset when built for graphql`, () => {
    const bbb234WxGreen4PresetGraphql =
      bbb234WxGreen4().buildGraphql<TStandalonePriceDraft>();
    expect(bbb234WxGreen4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bbb234-wx-green-4",
        "sku": "bbb234-wx-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 8000000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
