import type { TStandalonePriceDraft } from '../../../types';
import fff456StGreen5 from './fff-456-st-green-5';

describe(`with fff456StGreen5 preset`, () => {
  it(`should return a fff456StGreen5 preset`, () => {
    const fff456StGreen5Preset =
      fff456StGreen5().build<TStandalonePriceDraft>();
    expect(fff456StGreen5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fff456-st-green-5",
        "recurrencePolicy": undefined,
        "sku": "fff456-st-green",
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

  it(`should return a fff456StGreen5 preset when built for graphql`, () => {
    const fff456StGreen5PresetGraphql =
      fff456StGreen5().buildGraphql<TStandalonePriceDraft>();
    expect(fff456StGreen5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fff456-st-green-5",
        "recurrencePolicy": undefined,
        "sku": "fff456-st-green",
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
