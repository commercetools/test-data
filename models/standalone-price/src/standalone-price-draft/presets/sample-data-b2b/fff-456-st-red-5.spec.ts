import type { TStandalonePriceDraft } from '../../../types';
import fff456StRed5 from './fff-456-st-red-5';

describe(`with fff456StRed5 preset`, () => {
  it(`should return a fff456StRed5 preset`, () => {
    const fff456StRed5Preset = fff456StRed5().build<TStandalonePriceDraft>();
    expect(fff456StRed5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fff456-st-red-5",
        "sku": "fff456-st-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 5850000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a fff456StRed5 preset when built for graphql`, () => {
    const fff456StRed5PresetGraphql =
      fff456StRed5().buildGraphql<TStandalonePriceDraft>();
    expect(fff456StRed5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fff456-st-red-5",
        "sku": "fff456-st-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 5850000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
