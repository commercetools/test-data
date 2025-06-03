import type { TStandalonePriceDraft } from '../../../types';
import ledWorkLight2 from './led-work-light-2';

describe(`with ledWorkLight2 preset`, () => {
  it(`should return a ledWorkLight2 preset`, () => {
    const ledWorkLight2Preset = ledWorkLight2().build<TStandalonePriceDraft>();
    expect(ledWorkLight2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "led-work-light-2",
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

  it(`should return a ledWorkLight2 preset when built for graphql`, () => {
    const ledWorkLight2PresetGraphql =
      ledWorkLight2().buildGraphql<TStandalonePriceDraft>();
    expect(ledWorkLight2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "led-work-light-2",
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
