import type { TStandalonePriceDraft } from '../../../types';
import starterMotor7 from './starter-motor-7';

describe(`with starterMotor7 preset`, () => {
  it(`should return a starterMotor7 preset`, () => {
    const starterMotor7Preset = starterMotor7().build<TStandalonePriceDraft>();
    expect(starterMotor7Preset).toMatchInlineSnapshot(`
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
        "key": "starter-motor-7",
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

  it(`should return a starterMotor7 preset when built for graphql`, () => {
    const starterMotor7PresetGraphql =
      starterMotor7().buildGraphql<TStandalonePriceDraft>();
    expect(starterMotor7PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "starter-motor-7",
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
