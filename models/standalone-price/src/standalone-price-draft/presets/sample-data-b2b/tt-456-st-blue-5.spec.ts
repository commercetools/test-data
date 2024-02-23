import type { TStandalonePriceDraft } from '../../../types';
import tt456StBlue5 from './tt-456-st-blue-5';

describe(`with tt456StBlue5 preset`, () => {
  it(`should return a tt456StBlue5 preset`, () => {
    const tt456StBlue5Preset = tt456StBlue5().build<TStandalonePriceDraft>();
    expect(tt456StBlue5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tt456-st-blue-5",
        "sku": "tt456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2700000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a tt456StBlue5 preset when built for graphql`, () => {
    const tt456StBlue5PresetGraphql =
      tt456StBlue5().buildGraphql<TStandalonePriceDraft>();
    expect(tt456StBlue5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tt456-st-blue-5",
        "sku": "tt456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2700000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
