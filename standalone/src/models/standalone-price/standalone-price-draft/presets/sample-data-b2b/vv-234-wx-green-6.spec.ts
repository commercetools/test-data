import type { TStandalonePriceDraft } from '../../../types';
import vv234WxGreen6 from './vv-234-wx-green-6';

describe(`with vv234WxGreen6 preset`, () => {
  it(`should return a vv234WxGreen6 preset`, () => {
    const vv234WxGreen6Preset = vv234WxGreen6().build<TStandalonePriceDraft>();
    expect(vv234WxGreen6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "vv234-wx-green-6",
        "recurrencePolicy": undefined,
        "sku": "vv234-wx-green",
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

  it(`should return a vv234WxGreen6 preset when built for graphql`, () => {
    const vv234WxGreen6PresetGraphql =
      vv234WxGreen6().buildGraphql<TStandalonePriceDraft>();
    expect(vv234WxGreen6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "vv234-wx-green-6",
        "recurrencePolicy": undefined,
        "sku": "vv234-wx-green",
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
