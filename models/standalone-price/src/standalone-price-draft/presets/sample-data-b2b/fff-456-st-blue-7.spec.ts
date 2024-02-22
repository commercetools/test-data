import type { TStandalonePriceDraft } from '../../../types';
import fff456StBlue7 from './fff-456-st-blue-7';

describe(`with fff456StBlue7 preset`, () => {
  it(`should return a fff456StBlue7 preset`, () => {
    const fff456StBlue7Preset = fff456StBlue7().build<TStandalonePriceDraft>();
    expect(fff456StBlue7Preset).toMatchInlineSnapshot(`
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
        "key": "fff456-st-blue-7",
        "sku": "fff456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 7800000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a fff456StBlue7 preset when built for graphql`, () => {
    const fff456StBlue7PresetGraphql =
      fff456StBlue7().buildGraphql<TStandalonePriceDraft>();
    expect(fff456StBlue7PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "fff456-st-blue-7",
        "sku": "fff456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 7800000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
