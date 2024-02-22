import type { TStandalonePriceDraft } from '../../../types';
import tt456StBlue6 from './tt-456-st-blue-6';

describe(`with tt456StBlue6 preset`, () => {
  it(`should return a tt456StBlue6 preset`, () => {
    const tt456StBlue6Preset = tt456StBlue6().build<TStandalonePriceDraft>();
    expect(tt456StBlue6Preset).toMatchInlineSnapshot(`
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
        "key": "tt456-st-blue-6",
        "sku": "tt456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2400000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a tt456StBlue6 preset when built for graphql`, () => {
    const tt456StBlue6PresetGraphql =
      tt456StBlue6().buildGraphql<TStandalonePriceDraft>();
    expect(tt456StBlue6PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "tt456-st-blue-6",
        "sku": "tt456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2400000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
