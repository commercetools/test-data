import type { TStandalonePriceDraft } from '../../../types';
import starterMotor5 from './starter-motor-5';

describe(`with starterMotor5 preset`, () => {
  it(`should return a starterMotor5 preset`, () => {
    const starterMotor5Preset = starterMotor5().build<TStandalonePriceDraft>();
    expect(starterMotor5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "starter-motor-5",
        "recurrencePolicy": undefined,
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

  it(`should return a starterMotor5 preset when built for graphql`, () => {
    const starterMotor5PresetGraphql =
      starterMotor5().buildGraphql<TStandalonePriceDraft>();
    expect(starterMotor5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "starter-motor-5",
        "recurrencePolicy": undefined,
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
