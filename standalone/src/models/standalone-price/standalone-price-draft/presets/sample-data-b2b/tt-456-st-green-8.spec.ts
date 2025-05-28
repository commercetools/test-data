import type { TStandalonePriceDraft } from '../../../types';
import tt456StGreen8 from './tt-456-st-green-8';

describe(`with tt456StGreen8 preset`, () => {
  it(`should return a tt456StGreen8 preset`, () => {
    const tt456StGreen8Preset = tt456StGreen8().build<TStandalonePriceDraft>();
    expect(tt456StGreen8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tt456-st-green-8",
        "recurrencePolicy": undefined,
        "sku": "tt456-st-green",
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

  it(`should return a tt456StGreen8 preset when built for graphql`, () => {
    const tt456StGreen8PresetGraphql =
      tt456StGreen8().buildGraphql<TStandalonePriceDraft>();
    expect(tt456StGreen8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tt456-st-green-8",
        "recurrencePolicy": undefined,
        "sku": "tt456-st-green",
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
