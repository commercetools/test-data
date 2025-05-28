import type { TStandalonePriceDraft } from '../../../types';
import bbb234WxBlue7 from './bbb-234-wx-blue-7';

describe(`with bbb234WxBlue7 preset`, () => {
  it(`should return a bbb234WxBlue7 preset`, () => {
    const bbb234WxBlue7Preset = bbb234WxBlue7().build<TStandalonePriceDraft>();
    expect(bbb234WxBlue7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bbb234-wx-blue-7",
        "recurrencePolicy": undefined,
        "sku": "bbb234-wx-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 9600000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a bbb234WxBlue7 preset when built for graphql`, () => {
    const bbb234WxBlue7PresetGraphql =
      bbb234WxBlue7().buildGraphql<TStandalonePriceDraft>();
    expect(bbb234WxBlue7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bbb234-wx-blue-7",
        "recurrencePolicy": undefined,
        "sku": "bbb234-wx-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 9600000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
