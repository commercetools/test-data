import type { TStandalonePriceDraft } from '../../../types';
import fff456StBlue2 from './fff-456-st-blue-2';

describe(`with fff456StBlue2 preset`, () => {
  it(`should return a fff456StBlue2 preset`, () => {
    const fff456StBlue2Preset = fff456StBlue2().build<TStandalonePriceDraft>();
    expect(fff456StBlue2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fff456-st-blue-2",
        "recurrencePolicy": undefined,
        "sku": "fff456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 7150000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a fff456StBlue2 preset when built for graphql`, () => {
    const fff456StBlue2PresetGraphql =
      fff456StBlue2().buildGraphql<TStandalonePriceDraft>();
    expect(fff456StBlue2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fff456-st-blue-2",
        "recurrencePolicy": undefined,
        "sku": "fff456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 7150000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
