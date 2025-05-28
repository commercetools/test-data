import type { TStandalonePriceDraft } from '../../../types';
import ledWorkLight7 from './led-work-light-7';

describe(`with ledWorkLight7 preset`, () => {
  it(`should return a ledWorkLight7 preset`, () => {
    const ledWorkLight7Preset = ledWorkLight7().build<TStandalonePriceDraft>();
    expect(ledWorkLight7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "led-work-light-7",
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

  it(`should return a ledWorkLight7 preset when built for graphql`, () => {
    const ledWorkLight7PresetGraphql =
      ledWorkLight7().buildGraphql<TStandalonePriceDraft>();
    expect(ledWorkLight7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "led-work-light-7",
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
