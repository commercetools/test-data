import type { TStandalonePriceDraft } from '../../../types';
import tt456StGreen1 from './tt-456-st-green-1';

describe(`with tt456StGreen1 preset`, () => {
  it(`should return a tt456StGreen1 preset`, () => {
    const tt456StGreen1Preset = tt456StGreen1().build<TStandalonePriceDraft>();
    expect(tt456StGreen1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tt456-st-green-1",
        "sku": "tt456-st-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3960000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a tt456StGreen1 preset when built for graphql`, () => {
    const tt456StGreen1PresetGraphql =
      tt456StGreen1().buildGraphql<TStandalonePriceDraft>();
    expect(tt456StGreen1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "tt456-st-green-1",
        "sku": "tt456-st-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3960000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
