import type { TStandalonePriceDraft } from '../../../types';
import tt456StBlue8 from './tt-456-st-blue-8';

describe(`with tt456StBlue8 preset`, () => {
  it(`should return a tt456StBlue8 preset`, () => {
    const tt456StBlue8Preset = tt456StBlue8().build<TStandalonePriceDraft>();
    expect(tt456StBlue8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tt456-st-blue-8",
        "sku": "tt456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3300001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a tt456StBlue8 preset when built for graphql`, () => {
    const tt456StBlue8PresetGraphql =
      tt456StBlue8().buildGraphql<TStandalonePriceDraft>();
    expect(tt456StBlue8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tt456-st-blue-8",
        "sku": "tt456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3300001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
