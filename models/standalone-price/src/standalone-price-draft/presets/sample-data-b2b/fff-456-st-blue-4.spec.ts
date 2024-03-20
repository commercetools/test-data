import type { TStandalonePriceDraft } from '../../../types';
import fff456StBlue4 from './fff-456-st-blue-4';

describe(`with fff456StBlue4 preset`, () => {
  it(`should return a fff456StBlue4 preset`, () => {
    const fff456StBlue4Preset = fff456StBlue4().build<TStandalonePriceDraft>();
    expect(fff456StBlue4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fff456-st-blue-4",
        "sku": "fff456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 6500000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a fff456StBlue4 preset when built for graphql`, () => {
    const fff456StBlue4PresetGraphql =
      fff456StBlue4().buildGraphql<TStandalonePriceDraft>();
    expect(fff456StBlue4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fff456-st-blue-4",
        "sku": "fff456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 6500000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
