import type { TStandalonePriceDraft } from '../../../types';
import tt456StGreen3 from './tt-456-st-green-3';

describe(`with tt456StGreen3 preset`, () => {
  it(`should return a tt456StGreen3 preset`, () => {
    const tt456StGreen3Preset = tt456StGreen3().build<TStandalonePriceDraft>();
    expect(tt456StGreen3Preset).toMatchInlineSnapshot(`
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
        "key": "tt456-st-green-3",
        "sku": "tt456-st-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4620000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a tt456StGreen3 preset when built for graphql`, () => {
    const tt456StGreen3PresetGraphql =
      tt456StGreen3().buildGraphql<TStandalonePriceDraft>();
    expect(tt456StGreen3PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "tt456-st-green-3",
        "sku": "tt456-st-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4620000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
