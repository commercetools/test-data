import type { TStandalonePriceDraft } from '../../../types';
import starterMotor8 from './starter-motor-8';

describe(`with starterMotor8 preset`, () => {
  it(`should return a starterMotor8 preset`, () => {
    const starterMotor8Preset = starterMotor8().build<TStandalonePriceDraft>();
    expect(starterMotor8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "starter-motor-8",
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

  it(`should return a starterMotor8 preset when built for graphql`, () => {
    const starterMotor8PresetGraphql =
      starterMotor8().buildGraphql<TStandalonePriceDraft>();
    expect(starterMotor8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "starter-motor-8",
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
