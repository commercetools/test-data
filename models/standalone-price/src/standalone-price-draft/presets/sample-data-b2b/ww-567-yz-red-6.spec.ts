import type { TStandalonePriceDraft } from '../../../types';
import ww567YzRed6 from './ww-567-yz-red-6';

describe(`with ww567YzRed6 preset`, () => {
  it(`should return a ww567YzRed6 preset`, () => {
    const ww567YzRed6Preset = ww567YzRed6().build<TStandalonePriceDraft>();
    expect(ww567YzRed6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ww567-yz-red-6",
        "sku": "ww567-yz-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3600000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ww567YzRed6 preset when built for graphql`, () => {
    const ww567YzRed6PresetGraphql =
      ww567YzRed6().buildGraphql<TStandalonePriceDraft>();
    expect(ww567YzRed6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ww567-yz-red-6",
        "sku": "ww567-yz-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3600000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
