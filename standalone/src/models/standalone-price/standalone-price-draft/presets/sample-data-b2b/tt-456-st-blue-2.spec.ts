import type { TStandalonePriceDraft } from '../../../types';
import tt456StBlue2 from './tt-456-st-blue-2';

describe(`with tt456StBlue2 preset`, () => {
  it(`should return a tt456StBlue2 preset`, () => {
    const tt456StBlue2Preset = tt456StBlue2().build<TStandalonePriceDraft>();
    expect(tt456StBlue2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tt456-st-blue-2",
        "recurrencePolicy": undefined,
        "sku": "tt456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3300000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a tt456StBlue2 preset when built for graphql`, () => {
    const tt456StBlue2PresetGraphql =
      tt456StBlue2().buildGraphql<TStandalonePriceDraft>();
    expect(tt456StBlue2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tt456-st-blue-2",
        "recurrencePolicy": undefined,
        "sku": "tt456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3300000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
