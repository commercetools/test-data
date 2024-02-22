import type { TStandalonePriceDraft } from '../../../types';
import ww567YzRed5 from './ww-567-yz-red-5';

describe(`with ww567YzRed5 preset`, () => {
  it(`should return a ww567YzRed5 preset`, () => {
    const ww567YzRed5Preset = ww567YzRed5().build<TStandalonePriceDraft>();
    expect(ww567YzRed5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ww567-yz-red-5",
        "sku": "ww567-yz-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4050000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ww567YzRed5 preset when built for graphql`, () => {
    const ww567YzRed5PresetGraphql =
      ww567YzRed5().buildGraphql<TStandalonePriceDraft>();
    expect(ww567YzRed5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ww567-yz-red-5",
        "sku": "ww567-yz-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4050000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
