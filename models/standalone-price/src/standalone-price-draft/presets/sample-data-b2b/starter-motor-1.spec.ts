import type { TStandalonePriceDraft } from '../../../types';
import starterMotor1 from './starter-motor-1';

describe(`with starterMotor1 preset`, () => {
  it(`should return a starterMotor1 preset`, () => {
    const starterMotor1Preset = starterMotor1().build<TStandalonePriceDraft>();
    expect(starterMotor1Preset).toMatchInlineSnapshot(`
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
        "key": "starter-motor-1",
        "sku": "starter-motor",
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

  it(`should return a starterMotor1 preset when built for graphql`, () => {
    const starterMotor1PresetGraphql =
      starterMotor1().buildGraphql<TStandalonePriceDraft>();
    expect(starterMotor1PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "starter-motor-1",
        "sku": "starter-motor",
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
