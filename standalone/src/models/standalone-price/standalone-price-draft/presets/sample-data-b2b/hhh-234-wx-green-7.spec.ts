import type { TStandalonePriceDraft } from '../../../types';
import hhh234WxGreen7 from './hhh-234-wx-green-7';

describe(`with hhh234WxGreen7 preset`, () => {
  it(`should return a hhh234WxGreen7 preset`, () => {
    const hhh234WxGreen7Preset =
      hhh234WxGreen7().build<TStandalonePriceDraft>();
    expect(hhh234WxGreen7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hhh234-wx-green-7",
        "sku": "hhh234-wx-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 12000000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a hhh234WxGreen7 preset when built for graphql`, () => {
    const hhh234WxGreen7PresetGraphql =
      hhh234WxGreen7().buildGraphql<TStandalonePriceDraft>();
    expect(hhh234WxGreen7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hhh234-wx-green-7",
        "sku": "hhh234-wx-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 12000000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
