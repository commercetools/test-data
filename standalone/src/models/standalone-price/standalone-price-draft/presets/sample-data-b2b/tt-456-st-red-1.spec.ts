import type { TStandalonePriceDraft } from '../../../types';
import tt456StRed1 from './tt-456-st-red-1';

describe(`with tt456StRed1 preset`, () => {
  it(`should return a tt456StRed1 preset`, () => {
    const tt456StRed1Preset = tt456StRed1().build<TStandalonePriceDraft>();
    expect(tt456StRed1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tt456-st-red-1",
        "recurrencePolicy": undefined,
        "sku": "tt456-st-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3300000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a tt456StRed1 preset when built for graphql`, () => {
    const tt456StRed1PresetGraphql =
      tt456StRed1().buildGraphql<TStandalonePriceDraft>();
    expect(tt456StRed1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tt456-st-red-1",
        "recurrencePolicy": undefined,
        "sku": "tt456-st-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3300000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
