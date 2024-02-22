import type { TStandalonePriceDraft } from '../../../types';
import fff456StGreen7 from './fff-456-st-green-7';

describe(`with fff456StGreen7 preset`, () => {
  it(`should return a fff456StGreen7 preset`, () => {
    const fff456StGreen7Preset =
      fff456StGreen7().build<TStandalonePriceDraft>();
    expect(fff456StGreen7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fff456-st-green-7",
        "sku": "fff456-st-green",
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

  it(`should return a fff456StGreen7 preset when built for graphql`, () => {
    const fff456StGreen7PresetGraphql =
      fff456StGreen7().buildGraphql<TStandalonePriceDraft>();
    expect(fff456StGreen7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fff456-st-green-7",
        "sku": "fff456-st-green",
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
