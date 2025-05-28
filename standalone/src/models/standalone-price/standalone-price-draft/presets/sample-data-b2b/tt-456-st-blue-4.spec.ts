import type { TStandalonePriceDraft } from '../../../types';
import tt456StBlue4 from './tt-456-st-blue-4';

describe(`with tt456StBlue4 preset`, () => {
  it(`should return a tt456StBlue4 preset`, () => {
    const tt456StBlue4Preset = tt456StBlue4().build<TStandalonePriceDraft>();
    expect(tt456StBlue4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tt456-st-blue-4",
        "recurrencePolicy": undefined,
        "sku": "tt456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3000000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a tt456StBlue4 preset when built for graphql`, () => {
    const tt456StBlue4PresetGraphql =
      tt456StBlue4().buildGraphql<TStandalonePriceDraft>();
    expect(tt456StBlue4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tt456-st-blue-4",
        "recurrencePolicy": undefined,
        "sku": "tt456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3000000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
