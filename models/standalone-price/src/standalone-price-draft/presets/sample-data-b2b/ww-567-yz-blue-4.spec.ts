import type { TStandalonePriceDraft } from '../../../types';
import ww567YzBlue4 from './ww-567-yz-blue-4';

describe(`with ww567YzBlue4 preset`, () => {
  it(`should return a ww567YzBlue4 preset`, () => {
    const ww567YzBlue4Preset = ww567YzBlue4().build<TStandalonePriceDraft>();
    expect(ww567YzBlue4Preset).toMatchInlineSnapshot(`
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
        "key": "ww567-yz-blue-4",
        "sku": "ww567-yz-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4500000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ww567YzBlue4 preset when built for graphql`, () => {
    const ww567YzBlue4PresetGraphql =
      ww567YzBlue4().buildGraphql<TStandalonePriceDraft>();
    expect(ww567YzBlue4PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "ww567-yz-blue-4",
        "sku": "ww567-yz-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4500000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
