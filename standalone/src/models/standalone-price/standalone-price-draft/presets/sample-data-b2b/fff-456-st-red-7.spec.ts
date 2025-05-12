import type { TStandalonePriceDraft } from '../../../types';
import fff456StRed7 from './fff-456-st-red-7';

describe(`with fff456StRed7 preset`, () => {
  it(`should return a fff456StRed7 preset`, () => {
    const fff456StRed7Preset = fff456StRed7().build<TStandalonePriceDraft>();
    expect(fff456StRed7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fff456-st-red-7",
        "sku": "fff456-st-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 7800000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a fff456StRed7 preset when built for graphql`, () => {
    const fff456StRed7PresetGraphql =
      fff456StRed7().buildGraphql<TStandalonePriceDraft>();
    expect(fff456StRed7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fff456-st-red-7",
        "sku": "fff456-st-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 7800000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
