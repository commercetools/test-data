import type { TStandalonePriceDraft } from '../../../types';
import tt456StGreen7 from './tt-456-st-green-7';

describe(`with tt456StGreen7 preset`, () => {
  it(`should return a tt456StGreen7 preset`, () => {
    const tt456StGreen7Preset = tt456StGreen7().build<TStandalonePriceDraft>();
    expect(tt456StGreen7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tt456-st-green-7",
        "sku": "tt456-st-green",
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

  it(`should return a tt456StGreen7 preset when built for graphql`, () => {
    const tt456StGreen7PresetGraphql =
      tt456StGreen7().buildGraphql<TStandalonePriceDraft>();
    expect(tt456StGreen7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tt456-st-green-7",
        "sku": "tt456-st-green",
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
