import type { TStandalonePriceDraft } from '../../../types';
import fff456StRed1 from './fff-456-st-red-1';

describe(`with fff456StRed1 preset`, () => {
  it(`should return a fff456StRed1 preset`, () => {
    const fff456StRed1Preset = fff456StRed1().build<TStandalonePriceDraft>();
    expect(fff456StRed1Preset).toMatchInlineSnapshot(`
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
        "key": "fff456-st-red-1",
        "sku": "fff456-st-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 7150000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a fff456StRed1 preset when built for graphql`, () => {
    const fff456StRed1PresetGraphql =
      fff456StRed1().buildGraphql<TStandalonePriceDraft>();
    expect(fff456StRed1PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "fff456-st-red-1",
        "sku": "fff456-st-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 7150000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
