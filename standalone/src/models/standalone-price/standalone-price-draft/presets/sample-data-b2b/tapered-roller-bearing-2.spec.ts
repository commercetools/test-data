import type { TStandalonePriceDraft } from '../../../types';
import taperedRollerBearing2 from './tapered-roller-bearing-2';

describe(`with taperedRollerBearing2 preset`, () => {
  it(`should return a taperedRollerBearing2 preset`, () => {
    const taperedRollerBearing2Preset =
      taperedRollerBearing2().build<TStandalonePriceDraft>();
    expect(taperedRollerBearing2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tapered-roller-bearing-2",
        "recurrencePolicy": undefined,
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

  it(`should return a taperedRollerBearing2 preset when built for graphql`, () => {
    const taperedRollerBearing2PresetGraphql =
      taperedRollerBearing2().buildGraphql<TStandalonePriceDraft>();
    expect(taperedRollerBearing2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tapered-roller-bearing-2",
        "recurrencePolicy": undefined,
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
