import type { TStandalonePriceDraft } from '../../../types';
import fff456StGreen6 from './fff-456-st-green-6';

describe(`with fff456StGreen6 preset`, () => {
  it(`should return a fff456StGreen6 preset`, () => {
    const fff456StGreen6Preset =
      fff456StGreen6().build<TStandalonePriceDraft>();
    expect(fff456StGreen6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fff456-st-green-6",
        "sku": "fff456-st-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 5200000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a fff456StGreen6 preset when built for graphql`, () => {
    const fff456StGreen6PresetGraphql =
      fff456StGreen6().buildGraphql<TStandalonePriceDraft>();
    expect(fff456StGreen6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fff456-st-green-6",
        "sku": "fff456-st-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 5200000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
