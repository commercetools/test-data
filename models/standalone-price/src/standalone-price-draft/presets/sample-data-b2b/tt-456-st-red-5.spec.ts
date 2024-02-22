import type { TStandalonePriceDraft } from '../../../types';
import tt456StRed5 from './tt-456-st-red-5';

describe(`with tt456StRed5 preset`, () => {
  it(`should return a tt456StRed5 preset`, () => {
    const tt456StRed5Preset = tt456StRed5().build<TStandalonePriceDraft>();
    expect(tt456StRed5Preset).toMatchInlineSnapshot(`
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
        "key": "tt456-st-red-5",
        "sku": "tt456-st-red",
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

  it(`should return a tt456StRed5 preset when built for graphql`, () => {
    const tt456StRed5PresetGraphql =
      tt456StRed5().buildGraphql<TStandalonePriceDraft>();
    expect(tt456StRed5PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "tt456-st-red-5",
        "sku": "tt456-st-red",
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
