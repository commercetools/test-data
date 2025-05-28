import type { TStandalonePriceDraft } from '../../../types';
import hhh234WxBlue7 from './hhh-234-wx-blue-7';

describe(`with hhh234WxBlue7 preset`, () => {
  it(`should return a hhh234WxBlue7 preset`, () => {
    const hhh234WxBlue7Preset = hhh234WxBlue7().build<TStandalonePriceDraft>();
    expect(hhh234WxBlue7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hhh234-wx-blue-7",
        "recurrencePolicy": undefined,
        "sku": "hhh234-wx-blue",
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

  it(`should return a hhh234WxBlue7 preset when built for graphql`, () => {
    const hhh234WxBlue7PresetGraphql =
      hhh234WxBlue7().buildGraphql<TStandalonePriceDraft>();
    expect(hhh234WxBlue7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hhh234-wx-blue-7",
        "recurrencePolicy": undefined,
        "sku": "hhh234-wx-blue",
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
