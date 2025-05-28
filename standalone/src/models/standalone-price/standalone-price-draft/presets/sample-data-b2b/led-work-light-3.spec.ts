import type { TStandalonePriceDraft } from '../../../types';
import ledWorkLight3 from './led-work-light-3';

describe(`with ledWorkLight3 preset`, () => {
  it(`should return a ledWorkLight3 preset`, () => {
    const ledWorkLight3Preset = ledWorkLight3().build<TStandalonePriceDraft>();
    expect(ledWorkLight3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "led-work-light-3",
        "recurrencePolicy": undefined,
        "sku": "led-work-light",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 10000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ledWorkLight3 preset when built for graphql`, () => {
    const ledWorkLight3PresetGraphql =
      ledWorkLight3().buildGraphql<TStandalonePriceDraft>();
    expect(ledWorkLight3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "led-work-light-3",
        "recurrencePolicy": undefined,
        "sku": "led-work-light",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 10000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
