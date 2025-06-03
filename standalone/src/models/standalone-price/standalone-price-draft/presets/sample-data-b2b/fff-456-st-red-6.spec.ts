import type { TStandalonePriceDraft } from '../../../types';
import fff456StRed6 from './fff-456-st-red-6';

describe(`with fff456StRed6 preset`, () => {
  it(`should return a fff456StRed6 preset`, () => {
    const fff456StRed6Preset = fff456StRed6().build<TStandalonePriceDraft>();
    expect(fff456StRed6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fff456-st-red-6",
        "recurrencePolicy": undefined,
        "sku": "fff456-st-red",
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

  it(`should return a fff456StRed6 preset when built for graphql`, () => {
    const fff456StRed6PresetGraphql =
      fff456StRed6().buildGraphql<TStandalonePriceDraft>();
    expect(fff456StRed6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "fff456-st-red-6",
        "recurrencePolicy": undefined,
        "sku": "fff456-st-red",
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
