import type { TStandalonePriceDraft } from '../../../types';
import ccc567YzRed5 from './ccc-567-yz-red-5';

describe(`with ccc567YzRed5 preset`, () => {
  it(`should return a ccc567YzRed5 preset`, () => {
    const ccc567YzRed5Preset = ccc567YzRed5().build<TStandalonePriceDraft>();
    expect(ccc567YzRed5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ccc567-yz-red-5",
        "recurrencePolicy": undefined,
        "sku": "ccc567-yz-red",
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

  it(`should return a ccc567YzRed5 preset when built for graphql`, () => {
    const ccc567YzRed5PresetGraphql =
      ccc567YzRed5().buildGraphql<TStandalonePriceDraft>();
    expect(ccc567YzRed5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ccc567-yz-red-5",
        "recurrencePolicy": undefined,
        "sku": "ccc567-yz-red",
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
