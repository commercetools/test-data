import type { TStandalonePriceDraft } from '../../../types';
import starterMotor4 from './starter-motor-4';

describe(`with starterMotor4 preset`, () => {
  it(`should return a starterMotor4 preset`, () => {
    const starterMotor4Preset = starterMotor4().build<TStandalonePriceDraft>();
    expect(starterMotor4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "starter-motor-4",
        "recurrencePolicy": undefined,
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

  it(`should return a starterMotor4 preset when built for graphql`, () => {
    const starterMotor4PresetGraphql =
      starterMotor4().buildGraphql<TStandalonePriceDraft>();
    expect(starterMotor4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "starter-motor-4",
        "recurrencePolicy": undefined,
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
