import type { TStandalonePriceDraft } from '../../../types';
import hhh234WxBlue6 from './hhh-234-wx-blue-6';

describe(`with hhh234WxBlue6 preset`, () => {
  it(`should return a hhh234WxBlue6 preset`, () => {
    const hhh234WxBlue6Preset = hhh234WxBlue6().build<TStandalonePriceDraft>();
    expect(hhh234WxBlue6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hhh234-wx-blue-6",
        "sku": "hhh234-wx-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 8000000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a hhh234WxBlue6 preset when built for graphql`, () => {
    const hhh234WxBlue6PresetGraphql =
      hhh234WxBlue6().buildGraphql<TStandalonePriceDraft>();
    expect(hhh234WxBlue6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hhh234-wx-blue-6",
        "sku": "hhh234-wx-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 8000000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
