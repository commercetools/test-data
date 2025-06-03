import type { TStandalonePriceDraft } from '../../../types';
import tt456StBlue3 from './tt-456-st-blue-3';

describe(`with tt456StBlue3 preset`, () => {
  it(`should return a tt456StBlue3 preset`, () => {
    const tt456StBlue3Preset = tt456StBlue3().build<TStandalonePriceDraft>();
    expect(tt456StBlue3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tt456-st-blue-3",
        "recurrencePolicy": undefined,
        "sku": "tt456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4290000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a tt456StBlue3 preset when built for graphql`, () => {
    const tt456StBlue3PresetGraphql =
      tt456StBlue3().buildGraphql<TStandalonePriceDraft>();
    expect(tt456StBlue3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tt456-st-blue-3",
        "recurrencePolicy": undefined,
        "sku": "tt456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4290000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
