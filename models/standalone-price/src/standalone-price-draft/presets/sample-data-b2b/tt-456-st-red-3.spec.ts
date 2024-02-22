import type { TStandalonePriceDraft } from '../../../types';
import tt456StRed3 from './tt-456-st-red-3';

describe(`with tt456StRed3 preset`, () => {
  it(`should return a tt456StRed3 preset`, () => {
    const tt456StRed3Preset = tt456StRed3().build<TStandalonePriceDraft>();
    expect(tt456StRed3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tt456-st-red-3",
        "sku": "tt456-st-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3960000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a tt456StRed3 preset when built for graphql`, () => {
    const tt456StRed3PresetGraphql =
      tt456StRed3().buildGraphql<TStandalonePriceDraft>();
    expect(tt456StRed3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tt456-st-red-3",
        "sku": "tt456-st-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3960000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
