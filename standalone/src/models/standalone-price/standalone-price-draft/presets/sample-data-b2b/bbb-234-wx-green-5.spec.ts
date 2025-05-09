import type { TStandalonePriceDraft } from '../../../types';
import bbb234WxGreen5 from './bbb-234-wx-green-5';

describe(`with bbb234WxGreen5 preset`, () => {
  it(`should return a bbb234WxGreen5 preset`, () => {
    const bbb234WxGreen5Preset =
      bbb234WxGreen5().build<TStandalonePriceDraft>();
    expect(bbb234WxGreen5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bbb234-wx-green-5",
        "sku": "bbb234-wx-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 7200000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a bbb234WxGreen5 preset when built for graphql`, () => {
    const bbb234WxGreen5PresetGraphql =
      bbb234WxGreen5().buildGraphql<TStandalonePriceDraft>();
    expect(bbb234WxGreen5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bbb234-wx-green-5",
        "sku": "bbb234-wx-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 7200000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
