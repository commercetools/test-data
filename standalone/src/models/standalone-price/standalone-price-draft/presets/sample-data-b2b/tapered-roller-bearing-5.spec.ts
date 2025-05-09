import type { TStandalonePriceDraft } from '../../../types';
import taperedRollerBearing5 from './tapered-roller-bearing-5';

describe(`with taperedRollerBearing5 preset`, () => {
  it(`should return a taperedRollerBearing5 preset`, () => {
    const taperedRollerBearing5Preset =
      taperedRollerBearing5().build<TStandalonePriceDraft>();
    expect(taperedRollerBearing5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tapered-roller-bearing-5",
        "sku": "tapered-roller-bearing",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 20000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a taperedRollerBearing5 preset when built for graphql`, () => {
    const taperedRollerBearing5PresetGraphql =
      taperedRollerBearing5().buildGraphql<TStandalonePriceDraft>();
    expect(taperedRollerBearing5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tapered-roller-bearing-5",
        "sku": "tapered-roller-bearing",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 20000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
