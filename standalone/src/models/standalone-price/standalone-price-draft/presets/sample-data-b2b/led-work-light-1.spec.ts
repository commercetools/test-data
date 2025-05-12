import type { TStandalonePriceDraft } from '../../../types';
import ledWorkLight1 from './led-work-light-1';

describe(`with ledWorkLight1 preset`, () => {
  it(`should return a ledWorkLight1 preset`, () => {
    const ledWorkLight1Preset = ledWorkLight1().build<TStandalonePriceDraft>();
    expect(ledWorkLight1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "led-work-light-1",
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

  it(`should return a ledWorkLight1 preset when built for graphql`, () => {
    const ledWorkLight1PresetGraphql =
      ledWorkLight1().buildGraphql<TStandalonePriceDraft>();
    expect(ledWorkLight1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "led-work-light-1",
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
