import type { TStandalonePriceDraft } from '../../../types';
import ccc567YzBlue5 from './ccc-567-yz-blue-5';

describe(`with ccc567YzBlue5 preset`, () => {
  it(`should return a ccc567YzBlue5 preset`, () => {
    const ccc567YzBlue5Preset = ccc567YzBlue5().build<TStandalonePriceDraft>();
    expect(ccc567YzBlue5Preset).toMatchInlineSnapshot(`
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
        "key": "ccc567-yz-blue-5",
        "sku": "ccc567-yz-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 8100000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ccc567YzBlue5 preset when built for graphql`, () => {
    const ccc567YzBlue5PresetGraphql =
      ccc567YzBlue5().buildGraphql<TStandalonePriceDraft>();
    expect(ccc567YzBlue5PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "ccc567-yz-blue-5",
        "sku": "ccc567-yz-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 8100000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
