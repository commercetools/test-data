import type { TStandalonePriceDraft } from '../../../types';
import fff456StRed2 from './fff-456-st-red-2';

describe(`with fff456StRed2 preset`, () => {
  it(`should return a fff456StRed2 preset`, () => {
    const fff456StRed2Preset = fff456StRed2().build<TStandalonePriceDraft>();
    expect(fff456StRed2Preset).toMatchInlineSnapshot(`
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
        "key": "fff456-st-red-2",
        "sku": "fff456-st-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 6435000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a fff456StRed2 preset when built for graphql`, () => {
    const fff456StRed2PresetGraphql =
      fff456StRed2().buildGraphql<TStandalonePriceDraft>();
    expect(fff456StRed2PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "fff456-st-red-2",
        "sku": "fff456-st-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 6435000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
