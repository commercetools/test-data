import type { TStandalonePriceDraft } from '../../../types';
import tt456StGreen6 from './tt-456-st-green-6';

describe(`with tt456StGreen6 preset`, () => {
  it(`should return a tt456StGreen6 preset`, () => {
    const tt456StGreen6Preset = tt456StGreen6().build<TStandalonePriceDraft>();
    expect(tt456StGreen6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tt456-st-green-6",
        "recurrencePolicy": undefined,
        "sku": "tt456-st-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2400000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a tt456StGreen6 preset when built for graphql`, () => {
    const tt456StGreen6PresetGraphql =
      tt456StGreen6().buildGraphql<TStandalonePriceDraft>();
    expect(tt456StGreen6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tt456-st-green-6",
        "recurrencePolicy": undefined,
        "sku": "tt456-st-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2400000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
