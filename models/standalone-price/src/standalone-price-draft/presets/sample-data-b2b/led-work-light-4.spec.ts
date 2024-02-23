import type { TStandalonePriceDraft } from '../../../types';
import ledWorkLight4 from './led-work-light-4';

describe(`with ledWorkLight4 preset`, () => {
  it(`should return a ledWorkLight4 preset`, () => {
    const ledWorkLight4Preset = ledWorkLight4().build<TStandalonePriceDraft>();
    expect(ledWorkLight4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "led-work-light-4",
        "sku": "led-work-light",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 10000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ledWorkLight4 preset when built for graphql`, () => {
    const ledWorkLight4PresetGraphql =
      ledWorkLight4().buildGraphql<TStandalonePriceDraft>();
    expect(ledWorkLight4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "led-work-light-4",
        "sku": "led-work-light",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 10000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
