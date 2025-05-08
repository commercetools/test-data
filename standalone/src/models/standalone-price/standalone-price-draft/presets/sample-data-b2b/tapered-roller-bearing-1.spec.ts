import type { TStandalonePriceDraft } from '../../../types';
import taperedRollerBearing1 from './tapered-roller-bearing-1';

describe(`with taperedRollerBearing1 preset`, () => {
  it(`should return a taperedRollerBearing1 preset`, () => {
    const taperedRollerBearing1Preset =
      taperedRollerBearing1().build<TStandalonePriceDraft>();
    expect(taperedRollerBearing1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tapered-roller-bearing-1",
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

  it(`should return a taperedRollerBearing1 preset when built for graphql`, () => {
    const taperedRollerBearing1PresetGraphql =
      taperedRollerBearing1().buildGraphql<TStandalonePriceDraft>();
    expect(taperedRollerBearing1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tapered-roller-bearing-1",
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
