import type { TStandalonePriceDraft } from '../../../types';
import taperedRollerBearing8 from './tapered-roller-bearing-8';

describe(`with taperedRollerBearing8 preset`, () => {
  it(`should return a taperedRollerBearing8 preset`, () => {
    const taperedRollerBearing8Preset =
      taperedRollerBearing8().build<TStandalonePriceDraft>();
    expect(taperedRollerBearing8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tapered-roller-bearing-8",
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

  it(`should return a taperedRollerBearing8 preset when built for graphql`, () => {
    const taperedRollerBearing8PresetGraphql =
      taperedRollerBearing8().buildGraphql<TStandalonePriceDraft>();
    expect(taperedRollerBearing8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tapered-roller-bearing-8",
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
