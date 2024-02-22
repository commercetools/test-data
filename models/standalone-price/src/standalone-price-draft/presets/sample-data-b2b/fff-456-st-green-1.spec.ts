import type { TStandalonePriceDraft } from '../../../types';
import fff456StGreen1 from './fff-456-st-green-1';

describe(`with fff456StGreen1 preset`, () => {
  it(`should return a fff456StGreen1 preset`, () => {
    const fff456StGreen1Preset =
      fff456StGreen1().build<TStandalonePriceDraft>();
    expect(fff456StGreen1Preset).toMatchInlineSnapshot(`
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
        "key": "fff456-st-green-1",
        "sku": "fff456-st-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 8580000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a fff456StGreen1 preset when built for graphql`, () => {
    const fff456StGreen1PresetGraphql =
      fff456StGreen1().buildGraphql<TStandalonePriceDraft>();
    expect(fff456StGreen1PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "fff456-st-green-1",
        "sku": "fff456-st-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 8580000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
