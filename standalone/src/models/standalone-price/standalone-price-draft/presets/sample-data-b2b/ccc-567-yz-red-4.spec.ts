import type { TStandalonePriceDraft } from '../../../types';
import ccc567YzRed4 from './ccc-567-yz-red-4';

describe(`with ccc567YzRed4 preset`, () => {
  it(`should return a ccc567YzRed4 preset`, () => {
    const ccc567YzRed4Preset = ccc567YzRed4().build<TStandalonePriceDraft>();
    expect(ccc567YzRed4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ccc567-yz-red-4",
        "recurrencePolicy": undefined,
        "sku": "ccc567-yz-red",
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

  it(`should return a ccc567YzRed4 preset when built for graphql`, () => {
    const ccc567YzRed4PresetGraphql =
      ccc567YzRed4().buildGraphql<TStandalonePriceDraft>();
    expect(ccc567YzRed4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ccc567-yz-red-4",
        "recurrencePolicy": undefined,
        "sku": "ccc567-yz-red",
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
