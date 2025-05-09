import type { TStandalonePriceDraft } from '../../../types';
import tt456StGreen2 from './tt-456-st-green-2';

describe(`with tt456StGreen2 preset`, () => {
  it(`should return a tt456StGreen2 preset`, () => {
    const tt456StGreen2Preset = tt456StGreen2().build<TStandalonePriceDraft>();
    expect(tt456StGreen2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tt456-st-green-2",
        "sku": "tt456-st-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3630001,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a tt456StGreen2 preset when built for graphql`, () => {
    const tt456StGreen2PresetGraphql =
      tt456StGreen2().buildGraphql<TStandalonePriceDraft>();
    expect(tt456StGreen2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tt456-st-green-2",
        "sku": "tt456-st-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3630001,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
