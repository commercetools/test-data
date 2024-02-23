import type { TStandalonePriceDraft } from '../../../types';
import tt456StBlue1 from './tt-456-st-blue-1';

describe(`with tt456StBlue1 preset`, () => {
  it(`should return a tt456StBlue1 preset`, () => {
    const tt456StBlue1Preset = tt456StBlue1().build<TStandalonePriceDraft>();
    expect(tt456StBlue1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tt456-st-blue-1",
        "sku": "tt456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3630001,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a tt456StBlue1 preset when built for graphql`, () => {
    const tt456StBlue1PresetGraphql =
      tt456StBlue1().buildGraphql<TStandalonePriceDraft>();
    expect(tt456StBlue1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tt456-st-blue-1",
        "sku": "tt456-st-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3630001,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
