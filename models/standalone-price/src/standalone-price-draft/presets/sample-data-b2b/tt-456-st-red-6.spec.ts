import type { TStandalonePriceDraft } from '../../../types';
import tt456StRed6 from './tt-456-st-red-6';

describe(`with tt456StRed6 preset`, () => {
  it(`should return a tt456StRed6 preset`, () => {
    const tt456StRed6Preset = tt456StRed6().build<TStandalonePriceDraft>();
    expect(tt456StRed6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tt456-st-red-6",
        "sku": "tt456-st-red",
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

  it(`should return a tt456StRed6 preset when built for graphql`, () => {
    const tt456StRed6PresetGraphql =
      tt456StRed6().buildGraphql<TStandalonePriceDraft>();
    expect(tt456StRed6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tt456-st-red-6",
        "sku": "tt456-st-red",
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
