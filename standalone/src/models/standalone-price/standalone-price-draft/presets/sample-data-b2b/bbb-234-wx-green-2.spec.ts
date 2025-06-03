import type { TStandalonePriceDraft } from '../../../types';
import bbb234WxGreen2 from './bbb-234-wx-green-2';

describe(`with bbb234WxGreen2 preset`, () => {
  it(`should return a bbb234WxGreen2 preset`, () => {
    const bbb234WxGreen2Preset =
      bbb234WxGreen2().build<TStandalonePriceDraft>();
    expect(bbb234WxGreen2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bbb234-wx-green-2",
        "recurrencePolicy": undefined,
        "sku": "bbb234-wx-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 9680000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a bbb234WxGreen2 preset when built for graphql`, () => {
    const bbb234WxGreen2PresetGraphql =
      bbb234WxGreen2().buildGraphql<TStandalonePriceDraft>();
    expect(bbb234WxGreen2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bbb234-wx-green-2",
        "recurrencePolicy": undefined,
        "sku": "bbb234-wx-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 9680000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
