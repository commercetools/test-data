import type { TStandalonePriceDraft } from '../../../types';
import taperedRollerBearing3 from './tapered-roller-bearing-3';

describe(`with taperedRollerBearing3 preset`, () => {
  it(`should return a taperedRollerBearing3 preset`, () => {
    const taperedRollerBearing3Preset =
      taperedRollerBearing3().build<TStandalonePriceDraft>();
    expect(taperedRollerBearing3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tapered-roller-bearing-3",
        "recurrencePolicy": undefined,
        "sku": "tapered-roller-bearing",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 20000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a taperedRollerBearing3 preset when built for graphql`, () => {
    const taperedRollerBearing3PresetGraphql =
      taperedRollerBearing3().buildGraphql<TStandalonePriceDraft>();
    expect(taperedRollerBearing3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tapered-roller-bearing-3",
        "recurrencePolicy": undefined,
        "sku": "tapered-roller-bearing",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 20000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
