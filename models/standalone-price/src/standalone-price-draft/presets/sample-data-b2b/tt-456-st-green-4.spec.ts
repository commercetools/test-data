import type { TStandalonePriceDraft } from '../../../types';
import tt456StGreen4 from './tt-456-st-green-4';

describe(`with tt456StGreen4 preset`, () => {
  it(`should return a tt456StGreen4 preset`, () => {
    const tt456StGreen4Preset = tt456StGreen4().build<TStandalonePriceDraft>();
    expect(tt456StGreen4Preset).toMatchInlineSnapshot(`
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
        "key": "tt456-st-green-4",
        "sku": "tt456-st-green",
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

  it(`should return a tt456StGreen4 preset when built for graphql`, () => {
    const tt456StGreen4PresetGraphql =
      tt456StGreen4().buildGraphql<TStandalonePriceDraft>();
    expect(tt456StGreen4PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "tt456-st-green-4",
        "sku": "tt456-st-green",
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
