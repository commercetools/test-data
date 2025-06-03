import type { TStandalonePriceDraft } from '../../../types';
import fff456StBlue8 from './fff-456-st-blue-8';

describe(`with fff456StBlue8 preset`, () => {
  it(`should return a fff456StBlue8 preset`, () => {
    const fff456StBlue8Preset = fff456StBlue8().build<TStandalonePriceDraft>();
    expect(fff456StBlue8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fff456-st-blue-8",
        "recurrencePolicy": undefined,
        "sku": "fff456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 7150001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a fff456StBlue8 preset when built for graphql`, () => {
    const fff456StBlue8PresetGraphql =
      fff456StBlue8().buildGraphql<TStandalonePriceDraft>();
    expect(fff456StBlue8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fff456-st-blue-8",
        "recurrencePolicy": undefined,
        "sku": "fff456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 7150001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
