import type { TStandalonePriceDraft } from '../../../types';
import tt456StRed8 from './tt-456-st-red-8';

describe(`with tt456StRed8 preset`, () => {
  it(`should return a tt456StRed8 preset`, () => {
    const tt456StRed8Preset = tt456StRed8().build<TStandalonePriceDraft>();
    expect(tt456StRed8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tt456-st-red-8",
        "sku": "tt456-st-red",
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

  it(`should return a tt456StRed8 preset when built for graphql`, () => {
    const tt456StRed8PresetGraphql =
      tt456StRed8().buildGraphql<TStandalonePriceDraft>();
    expect(tt456StRed8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tt456-st-red-8",
        "sku": "tt456-st-red",
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
