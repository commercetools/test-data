import type { TStandalonePriceDraft } from '../../../types';
import tt456StBlue7 from './tt-456-st-blue-7';

describe(`with tt456StBlue7 preset`, () => {
  it(`should return a tt456StBlue7 preset`, () => {
    const tt456StBlue7Preset = tt456StBlue7().build<TStandalonePriceDraft>();
    expect(tt456StBlue7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tt456-st-blue-7",
        "recurrencePolicy": undefined,
        "sku": "tt456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3600000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a tt456StBlue7 preset when built for graphql`, () => {
    const tt456StBlue7PresetGraphql =
      tt456StBlue7().buildGraphql<TStandalonePriceDraft>();
    expect(tt456StBlue7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tt456-st-blue-7",
        "recurrencePolicy": undefined,
        "sku": "tt456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3600000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
