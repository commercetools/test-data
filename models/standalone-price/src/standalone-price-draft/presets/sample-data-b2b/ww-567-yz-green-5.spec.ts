import type { TStandalonePriceDraft } from '../../../types';
import ww567YzGreen5 from './ww-567-yz-green-5';

describe(`with ww567YzGreen5 preset`, () => {
  it(`should return a ww567YzGreen5 preset`, () => {
    const ww567YzGreen5Preset = ww567YzGreen5().build<TStandalonePriceDraft>();
    expect(ww567YzGreen5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ww567-yz-green-5",
        "sku": "ww567-yz-green",
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

  it(`should return a ww567YzGreen5 preset when built for graphql`, () => {
    const ww567YzGreen5PresetGraphql =
      ww567YzGreen5().buildGraphql<TStandalonePriceDraft>();
    expect(ww567YzGreen5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ww567-yz-green-5",
        "sku": "ww567-yz-green",
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
