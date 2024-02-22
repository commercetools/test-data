import type { TStandalonePriceDraft } from '../../../types';
import starterMotor3 from './starter-motor-3';

describe(`with starterMotor3 preset`, () => {
  it(`should return a starterMotor3 preset`, () => {
    const starterMotor3Preset = starterMotor3().build<TStandalonePriceDraft>();
    expect(starterMotor3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "starter-motor-3",
        "sku": "starter-motor",
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

  it(`should return a starterMotor3 preset when built for graphql`, () => {
    const starterMotor3PresetGraphql =
      starterMotor3().buildGraphql<TStandalonePriceDraft>();
    expect(starterMotor3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "starter-motor-3",
        "sku": "starter-motor",
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
