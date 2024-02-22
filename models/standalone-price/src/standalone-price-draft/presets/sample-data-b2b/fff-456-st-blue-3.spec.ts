import type { TStandalonePriceDraft } from '../../../types';
import fff456StBlue3 from './fff-456-st-blue-3';

describe(`with fff456StBlue3 preset`, () => {
  it(`should return a fff456StBlue3 preset`, () => {
    const fff456StBlue3Preset = fff456StBlue3().build<TStandalonePriceDraft>();
    expect(fff456StBlue3Preset).toMatchInlineSnapshot(`
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
        "key": "fff456-st-blue-3",
        "sku": "fff456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 9295000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a fff456StBlue3 preset when built for graphql`, () => {
    const fff456StBlue3PresetGraphql =
      fff456StBlue3().buildGraphql<TStandalonePriceDraft>();
    expect(fff456StBlue3PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "fff456-st-blue-3",
        "sku": "fff456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 9295000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
