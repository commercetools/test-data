import type { TStandalonePriceDraft } from '../../../types';
import fff456StGreen4 from './fff-456-st-green-4';

describe(`with fff456StGreen4 preset`, () => {
  it(`should return a fff456StGreen4 preset`, () => {
    const fff456StGreen4Preset =
      fff456StGreen4().build<TStandalonePriceDraft>();
    expect(fff456StGreen4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fff456-st-green-4",
        "sku": "fff456-st-green",
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

  it(`should return a fff456StGreen4 preset when built for graphql`, () => {
    const fff456StGreen4PresetGraphql =
      fff456StGreen4().buildGraphql<TStandalonePriceDraft>();
    expect(fff456StGreen4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fff456-st-green-4",
        "sku": "fff456-st-green",
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
