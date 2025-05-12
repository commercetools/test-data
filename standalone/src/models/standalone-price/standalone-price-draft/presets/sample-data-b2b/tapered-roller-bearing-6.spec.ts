import type { TStandalonePriceDraft } from '../../../types';
import taperedRollerBearing6 from './tapered-roller-bearing-6';

describe(`with taperedRollerBearing6 preset`, () => {
  it(`should return a taperedRollerBearing6 preset`, () => {
    const taperedRollerBearing6Preset =
      taperedRollerBearing6().build<TStandalonePriceDraft>();
    expect(taperedRollerBearing6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tapered-roller-bearing-6",
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

  it(`should return a taperedRollerBearing6 preset when built for graphql`, () => {
    const taperedRollerBearing6PresetGraphql =
      taperedRollerBearing6().buildGraphql<TStandalonePriceDraft>();
    expect(taperedRollerBearing6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tapered-roller-bearing-6",
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
