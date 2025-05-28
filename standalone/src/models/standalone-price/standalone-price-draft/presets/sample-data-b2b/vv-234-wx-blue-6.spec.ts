import type { TStandalonePriceDraft } from '../../../types';
import vv234WxBlue6 from './vv-234-wx-blue-6';

describe(`with vv234WxBlue6 preset`, () => {
  it(`should return a vv234WxBlue6 preset`, () => {
    const vv234WxBlue6Preset = vv234WxBlue6().build<TStandalonePriceDraft>();
    expect(vv234WxBlue6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "vv234-wx-blue-6",
        "recurrencePolicy": undefined,
        "sku": "vv234-wx-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3200000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a vv234WxBlue6 preset when built for graphql`, () => {
    const vv234WxBlue6PresetGraphql =
      vv234WxBlue6().buildGraphql<TStandalonePriceDraft>();
    expect(vv234WxBlue6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "vv234-wx-blue-6",
        "recurrencePolicy": undefined,
        "sku": "vv234-wx-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3200000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
