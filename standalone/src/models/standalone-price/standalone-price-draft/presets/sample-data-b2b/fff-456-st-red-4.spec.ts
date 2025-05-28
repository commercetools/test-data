import type { TStandalonePriceDraft } from '../../../types';
import fff456StRed4 from './fff-456-st-red-4';

describe(`with fff456StRed4 preset`, () => {
  it(`should return a fff456StRed4 preset`, () => {
    const fff456StRed4Preset = fff456StRed4().build<TStandalonePriceDraft>();
    expect(fff456StRed4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fff456-st-red-4",
        "recurrencePolicy": undefined,
        "sku": "fff456-st-red",
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

  it(`should return a fff456StRed4 preset when built for graphql`, () => {
    const fff456StRed4PresetGraphql =
      fff456StRed4().buildGraphql<TStandalonePriceDraft>();
    expect(fff456StRed4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fff456-st-red-4",
        "recurrencePolicy": undefined,
        "sku": "fff456-st-red",
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
