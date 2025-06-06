import type { TStandalonePriceDraft } from '../../../types';
import bbb234WxRed2 from './bbb-234-wx-red-2';

describe(`with bbb234WxRed2 preset`, () => {
  it(`should return a bbb234WxRed2 preset`, () => {
    const bbb234WxRed2Preset = bbb234WxRed2().build<TStandalonePriceDraft>();
    expect(bbb234WxRed2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bbb234-wx-red-2",
        "recurrencePolicy": undefined,
        "sku": "bbb234-wx-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 7920000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a bbb234WxRed2 preset when built for graphql`, () => {
    const bbb234WxRed2PresetGraphql =
      bbb234WxRed2().buildGraphql<TStandalonePriceDraft>();
    expect(bbb234WxRed2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bbb234-wx-red-2",
        "recurrencePolicy": undefined,
        "sku": "bbb234-wx-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 7920000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
