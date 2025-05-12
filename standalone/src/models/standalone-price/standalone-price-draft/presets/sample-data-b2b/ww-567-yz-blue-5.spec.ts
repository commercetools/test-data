import type { TStandalonePriceDraft } from '../../../types';
import ww567YzBlue5 from './ww-567-yz-blue-5';

describe(`with ww567YzBlue5 preset`, () => {
  it(`should return a ww567YzBlue5 preset`, () => {
    const ww567YzBlue5Preset = ww567YzBlue5().build<TStandalonePriceDraft>();
    expect(ww567YzBlue5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ww567-yz-blue-5",
        "sku": "ww567-yz-blue",
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

  it(`should return a ww567YzBlue5 preset when built for graphql`, () => {
    const ww567YzBlue5PresetGraphql =
      ww567YzBlue5().buildGraphql<TStandalonePriceDraft>();
    expect(ww567YzBlue5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ww567-yz-blue-5",
        "sku": "ww567-yz-blue",
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
