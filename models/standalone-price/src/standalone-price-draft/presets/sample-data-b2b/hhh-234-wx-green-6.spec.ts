import type { TStandalonePriceDraft } from '../../../types';
import hhh234WxGreen6 from './hhh-234-wx-green-6';

describe(`with hhh234WxGreen6 preset`, () => {
  it(`should return a hhh234WxGreen6 preset`, () => {
    const hhh234WxGreen6Preset =
      hhh234WxGreen6().build<TStandalonePriceDraft>();
    expect(hhh234WxGreen6Preset).toMatchInlineSnapshot(`
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
        "key": "hhh234-wx-green-6",
        "sku": "hhh234-wx-green",
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

  it(`should return a hhh234WxGreen6 preset when built for graphql`, () => {
    const hhh234WxGreen6PresetGraphql =
      hhh234WxGreen6().buildGraphql<TStandalonePriceDraft>();
    expect(hhh234WxGreen6PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "hhh234-wx-green-6",
        "sku": "hhh234-wx-green",
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
