import type { TStandalonePriceDraft } from '../../../types';
import taperedRollerBearing7 from './tapered-roller-bearing-7';

describe(`with taperedRollerBearing7 preset`, () => {
  it(`should return a taperedRollerBearing7 preset`, () => {
    const taperedRollerBearing7Preset =
      taperedRollerBearing7().build<TStandalonePriceDraft>();
    expect(taperedRollerBearing7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tapered-roller-bearing-7",
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

  it(`should return a taperedRollerBearing7 preset when built for graphql`, () => {
    const taperedRollerBearing7PresetGraphql =
      taperedRollerBearing7().buildGraphql<TStandalonePriceDraft>();
    expect(taperedRollerBearing7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tapered-roller-bearing-7",
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
