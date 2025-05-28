import type { TStandalonePriceDraft } from '../../../types';
import taperedRollerBearing4 from './tapered-roller-bearing-4';

describe(`with taperedRollerBearing4 preset`, () => {
  it(`should return a taperedRollerBearing4 preset`, () => {
    const taperedRollerBearing4Preset =
      taperedRollerBearing4().build<TStandalonePriceDraft>();
    expect(taperedRollerBearing4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tapered-roller-bearing-4",
        "recurrencePolicy": undefined,
        "sku": "tapered-roller-bearing",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 20000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a taperedRollerBearing4 preset when built for graphql`, () => {
    const taperedRollerBearing4PresetGraphql =
      taperedRollerBearing4().buildGraphql<TStandalonePriceDraft>();
    expect(taperedRollerBearing4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tapered-roller-bearing-4",
        "recurrencePolicy": undefined,
        "sku": "tapered-roller-bearing",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 20000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
