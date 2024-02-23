import type { TStandalonePriceDraft } from '../../../types';
import fff456StRed3 from './fff-456-st-red-3';

describe(`with fff456StRed3 preset`, () => {
  it(`should return a fff456StRed3 preset`, () => {
    const fff456StRed3Preset = fff456StRed3().build<TStandalonePriceDraft>();
    expect(fff456StRed3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fff456-st-red-3",
        "sku": "fff456-st-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 8580000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a fff456StRed3 preset when built for graphql`, () => {
    const fff456StRed3PresetGraphql =
      fff456StRed3().buildGraphql<TStandalonePriceDraft>();
    expect(fff456StRed3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fff456-st-red-3",
        "sku": "fff456-st-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 8580000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
