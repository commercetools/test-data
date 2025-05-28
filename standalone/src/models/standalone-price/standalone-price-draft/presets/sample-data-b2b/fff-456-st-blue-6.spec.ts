import type { TStandalonePriceDraft } from '../../../types';
import fff456StBlue6 from './fff-456-st-blue-6';

describe(`with fff456StBlue6 preset`, () => {
  it(`should return a fff456StBlue6 preset`, () => {
    const fff456StBlue6Preset = fff456StBlue6().build<TStandalonePriceDraft>();
    expect(fff456StBlue6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fff456-st-blue-6",
        "recurrencePolicy": undefined,
        "sku": "fff456-st-blue",
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

  it(`should return a fff456StBlue6 preset when built for graphql`, () => {
    const fff456StBlue6PresetGraphql =
      fff456StBlue6().buildGraphql<TStandalonePriceDraft>();
    expect(fff456StBlue6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fff456-st-blue-6",
        "recurrencePolicy": undefined,
        "sku": "fff456-st-blue",
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
