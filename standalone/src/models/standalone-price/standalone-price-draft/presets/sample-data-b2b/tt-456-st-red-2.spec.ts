import type { TStandalonePriceDraft } from '../../../types';
import tt456StRed2 from './tt-456-st-red-2';

describe(`with tt456StRed2 preset`, () => {
  it(`should return a tt456StRed2 preset`, () => {
    const tt456StRed2Preset = tt456StRed2().build<TStandalonePriceDraft>();
    expect(tt456StRed2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tt456-st-red-2",
        "sku": "tt456-st-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2970000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a tt456StRed2 preset when built for graphql`, () => {
    const tt456StRed2PresetGraphql =
      tt456StRed2().buildGraphql<TStandalonePriceDraft>();
    expect(tt456StRed2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tt456-st-red-2",
        "sku": "tt456-st-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2970000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
