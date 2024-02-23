import type { TStandalonePriceDraft } from '../../../types';
import fff456StGreen8 from './fff-456-st-green-8';

describe(`with fff456StGreen8 preset`, () => {
  it(`should return a fff456StGreen8 preset`, () => {
    const fff456StGreen8Preset =
      fff456StGreen8().build<TStandalonePriceDraft>();
    expect(fff456StGreen8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fff456-st-green-8",
        "sku": "fff456-st-green",
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

  it(`should return a fff456StGreen8 preset when built for graphql`, () => {
    const fff456StGreen8PresetGraphql =
      fff456StGreen8().buildGraphql<TStandalonePriceDraft>();
    expect(fff456StGreen8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fff456-st-green-8",
        "sku": "fff456-st-green",
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
