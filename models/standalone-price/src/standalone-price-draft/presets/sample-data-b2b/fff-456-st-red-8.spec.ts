import type { TStandalonePriceDraft } from '../../../types';
import fff456StRed8 from './fff-456-st-red-8';

describe(`with fff456StRed8 preset`, () => {
  it(`should return a fff456StRed8 preset`, () => {
    const fff456StRed8Preset = fff456StRed8().build<TStandalonePriceDraft>();
    expect(fff456StRed8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fff456-st-red-8",
        "sku": "fff456-st-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 7150001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a fff456StRed8 preset when built for graphql`, () => {
    const fff456StRed8PresetGraphql =
      fff456StRed8().buildGraphql<TStandalonePriceDraft>();
    expect(fff456StRed8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fff456-st-red-8",
        "sku": "fff456-st-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 7150001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
