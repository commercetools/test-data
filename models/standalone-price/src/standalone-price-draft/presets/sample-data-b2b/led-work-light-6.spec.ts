import type { TStandalonePriceDraft } from '../../../types';
import ledWorkLight6 from './led-work-light-6';

describe(`with ledWorkLight6 preset`, () => {
  it(`should return a ledWorkLight6 preset`, () => {
    const ledWorkLight6Preset = ledWorkLight6().build<TStandalonePriceDraft>();
    expect(ledWorkLight6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "led-work-light-6",
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

  it(`should return a ledWorkLight6 preset when built for graphql`, () => {
    const ledWorkLight6PresetGraphql =
      ledWorkLight6().buildGraphql<TStandalonePriceDraft>();
    expect(ledWorkLight6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "led-work-light-6",
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
