import type { TStandalonePriceDraft } from '../../../types';
import hhh234WxBlue8 from './hhh-234-wx-blue-8';

describe(`with hhh234WxBlue8 preset`, () => {
  it(`should return a hhh234WxBlue8 preset`, () => {
    const hhh234WxBlue8Preset = hhh234WxBlue8().build<TStandalonePriceDraft>();
    expect(hhh234WxBlue8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hhh234-wx-blue-8",
        "recurrencePolicy": undefined,
        "sku": "hhh234-wx-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 11000000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a hhh234WxBlue8 preset when built for graphql`, () => {
    const hhh234WxBlue8PresetGraphql =
      hhh234WxBlue8().buildGraphql<TStandalonePriceDraft>();
    expect(hhh234WxBlue8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hhh234-wx-blue-8",
        "recurrencePolicy": undefined,
        "sku": "hhh234-wx-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 11000000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
