import type { TStandalonePriceDraft } from '../../../types';
import fff456StBlue5 from './fff-456-st-blue-5';

describe(`with fff456StBlue5 preset`, () => {
  it(`should return a fff456StBlue5 preset`, () => {
    const fff456StBlue5Preset = fff456StBlue5().build<TStandalonePriceDraft>();
    expect(fff456StBlue5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fff456-st-blue-5",
        "sku": "fff456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 5850000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a fff456StBlue5 preset when built for graphql`, () => {
    const fff456StBlue5PresetGraphql =
      fff456StBlue5().buildGraphql<TStandalonePriceDraft>();
    expect(fff456StBlue5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fff456-st-blue-5",
        "sku": "fff456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 5850000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
