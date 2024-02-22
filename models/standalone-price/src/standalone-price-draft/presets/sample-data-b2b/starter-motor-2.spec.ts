import type { TStandalonePriceDraft } from '../../../types';
import starterMotor2 from './starter-motor-2';

describe(`with starterMotor2 preset`, () => {
  it(`should return a starterMotor2 preset`, () => {
    const starterMotor2Preset = starterMotor2().build<TStandalonePriceDraft>();
    expect(starterMotor2Preset).toMatchInlineSnapshot(`
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
        "key": "starter-motor-2",
        "sku": "starter-motor",
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

  it(`should return a starterMotor2 preset when built for graphql`, () => {
    const starterMotor2PresetGraphql =
      starterMotor2().buildGraphql<TStandalonePriceDraft>();
    expect(starterMotor2PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "starter-motor-2",
        "sku": "starter-motor",
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
