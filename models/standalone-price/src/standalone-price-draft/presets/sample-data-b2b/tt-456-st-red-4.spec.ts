import type { TStandalonePriceDraft } from '../../../types';
import tt456StRed4 from './tt-456-st-red-4';

describe(`with tt456StRed4 preset`, () => {
  it(`should return a tt456StRed4 preset`, () => {
    const tt456StRed4Preset = tt456StRed4().build<TStandalonePriceDraft>();
    expect(tt456StRed4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tt456-st-red-4",
        "sku": "tt456-st-red",
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

  it(`should return a tt456StRed4 preset when built for graphql`, () => {
    const tt456StRed4PresetGraphql =
      tt456StRed4().buildGraphql<TStandalonePriceDraft>();
    expect(tt456StRed4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tt456-st-red-4",
        "sku": "tt456-st-red",
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
