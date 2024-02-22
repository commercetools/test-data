import type { TStandalonePriceDraft } from '../../../types';
import ledWorkLight8 from './led-work-light-8';

describe(`with ledWorkLight8 preset`, () => {
  it(`should return a ledWorkLight8 preset`, () => {
    const ledWorkLight8Preset = ledWorkLight8().build<TStandalonePriceDraft>();
    expect(ledWorkLight8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "led-work-light-8",
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

  it(`should return a ledWorkLight8 preset when built for graphql`, () => {
    const ledWorkLight8PresetGraphql =
      ledWorkLight8().buildGraphql<TStandalonePriceDraft>();
    expect(ledWorkLight8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "led-work-light-8",
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
