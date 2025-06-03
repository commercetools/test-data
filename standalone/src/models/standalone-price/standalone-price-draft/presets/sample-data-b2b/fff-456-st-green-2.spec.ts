import type { TStandalonePriceDraft } from '../../../types';
import fff456StGreen2 from './fff-456-st-green-2';

describe(`with fff456StGreen2 preset`, () => {
  it(`should return a fff456StGreen2 preset`, () => {
    const fff456StGreen2Preset =
      fff456StGreen2().build<TStandalonePriceDraft>();
    expect(fff456StGreen2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fff456-st-green-2",
        "recurrencePolicy": undefined,
        "sku": "fff456-st-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 7865001,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a fff456StGreen2 preset when built for graphql`, () => {
    const fff456StGreen2PresetGraphql =
      fff456StGreen2().buildGraphql<TStandalonePriceDraft>();
    expect(fff456StGreen2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fff456-st-green-2",
        "recurrencePolicy": undefined,
        "sku": "fff456-st-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 7865001,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
