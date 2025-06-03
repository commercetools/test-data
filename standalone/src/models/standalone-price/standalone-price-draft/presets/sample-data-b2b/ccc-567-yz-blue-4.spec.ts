import type { TStandalonePriceDraft } from '../../../types';
import ccc567YzBlue4 from './ccc-567-yz-blue-4';

describe(`with ccc567YzBlue4 preset`, () => {
  it(`should return a ccc567YzBlue4 preset`, () => {
    const ccc567YzBlue4Preset = ccc567YzBlue4().build<TStandalonePriceDraft>();
    expect(ccc567YzBlue4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ccc567-yz-blue-4",
        "recurrencePolicy": undefined,
        "sku": "ccc567-yz-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 9000000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ccc567YzBlue4 preset when built for graphql`, () => {
    const ccc567YzBlue4PresetGraphql =
      ccc567YzBlue4().buildGraphql<TStandalonePriceDraft>();
    expect(ccc567YzBlue4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ccc567-yz-blue-4",
        "recurrencePolicy": undefined,
        "sku": "ccc567-yz-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 9000000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
