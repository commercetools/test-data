import type { TStandalonePriceDraft } from '../../../types';
import hhh234WxRed7 from './hhh-234-wx-red-7';

describe(`with hhh234WxRed7 preset`, () => {
  it(`should return a hhh234WxRed7 preset`, () => {
    const hhh234WxRed7Preset = hhh234WxRed7().build<TStandalonePriceDraft>();
    expect(hhh234WxRed7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hhh234-wx-red-7",
        "recurrencePolicy": undefined,
        "sku": "hhh234-wx-red",
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

  it(`should return a hhh234WxRed7 preset when built for graphql`, () => {
    const hhh234WxRed7PresetGraphql =
      hhh234WxRed7().buildGraphql<TStandalonePriceDraft>();
    expect(hhh234WxRed7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hhh234-wx-red-7",
        "recurrencePolicy": undefined,
        "sku": "hhh234-wx-red",
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
