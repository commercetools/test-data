import type { TStandalonePriceDraft } from '../../../types';
import ledWorkLight5 from './led-work-light-5';

describe(`with ledWorkLight5 preset`, () => {
  it(`should return a ledWorkLight5 preset`, () => {
    const ledWorkLight5Preset = ledWorkLight5().build<TStandalonePriceDraft>();
    expect(ledWorkLight5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "led-work-light-5",
        "recurrencePolicy": undefined,
        "sku": "led-work-light",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 10000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ledWorkLight5 preset when built for graphql`, () => {
    const ledWorkLight5PresetGraphql =
      ledWorkLight5().buildGraphql<TStandalonePriceDraft>();
    expect(ledWorkLight5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "led-work-light-5",
        "recurrencePolicy": undefined,
        "sku": "led-work-light",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 10000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
