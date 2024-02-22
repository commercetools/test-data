import type { TStandalonePriceDraft } from '../../../types';
import tt456StRed7 from './tt-456-st-red-7';

describe(`with tt456StRed7 preset`, () => {
  it(`should return a tt456StRed7 preset`, () => {
    const tt456StRed7Preset = tt456StRed7().build<TStandalonePriceDraft>();
    expect(tt456StRed7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tt456-st-red-7",
        "sku": "tt456-st-red",
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

  it(`should return a tt456StRed7 preset when built for graphql`, () => {
    const tt456StRed7PresetGraphql =
      tt456StRed7().buildGraphql<TStandalonePriceDraft>();
    expect(tt456StRed7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tt456-st-red-7",
        "sku": "tt456-st-red",
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
