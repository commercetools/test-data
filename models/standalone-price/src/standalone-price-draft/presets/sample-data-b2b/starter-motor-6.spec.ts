import type { TStandalonePriceDraft } from '../../../types';
import starterMotor6 from './starter-motor-6';

describe(`with starterMotor6 preset`, () => {
  it(`should return a starterMotor6 preset`, () => {
    const starterMotor6Preset = starterMotor6().build<TStandalonePriceDraft>();
    expect(starterMotor6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "starter-motor-6",
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

  it(`should return a starterMotor6 preset when built for graphql`, () => {
    const starterMotor6PresetGraphql =
      starterMotor6().buildGraphql<TStandalonePriceDraft>();
    expect(starterMotor6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "starter-motor-6",
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
