import type { TStandalonePriceDraft } from '../../../types';
import bbb234WxRed7 from './bbb-234-wx-red-7';

describe(`with bbb234WxRed7 preset`, () => {
  it(`should return a bbb234WxRed7 preset`, () => {
    const bbb234WxRed7Preset = bbb234WxRed7().build<TStandalonePriceDraft>();
    expect(bbb234WxRed7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bbb234-wx-red-7",
        "recurrencePolicy": undefined,
        "sku": "bbb234-wx-red",
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

  it(`should return a bbb234WxRed7 preset when built for graphql`, () => {
    const bbb234WxRed7PresetGraphql =
      bbb234WxRed7().buildGraphql<TStandalonePriceDraft>();
    expect(bbb234WxRed7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bbb234-wx-red-7",
        "recurrencePolicy": undefined,
        "sku": "bbb234-wx-red",
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
