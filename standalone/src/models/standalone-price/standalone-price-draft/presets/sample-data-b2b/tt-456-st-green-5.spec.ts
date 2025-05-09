import type { TStandalonePriceDraft } from '../../../types';
import tt456StGreen5 from './tt-456-st-green-5';

describe(`with tt456StGreen5 preset`, () => {
  it(`should return a tt456StGreen5 preset`, () => {
    const tt456StGreen5Preset = tt456StGreen5().build<TStandalonePriceDraft>();
    expect(tt456StGreen5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tt456-st-green-5",
        "sku": "tt456-st-green",
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

  it(`should return a tt456StGreen5 preset when built for graphql`, () => {
    const tt456StGreen5PresetGraphql =
      tt456StGreen5().buildGraphql<TStandalonePriceDraft>();
    expect(tt456StGreen5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tt456-st-green-5",
        "sku": "tt456-st-green",
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
