import type { TStandalonePriceDraft } from '../../../types';
import g123Qr20156 from './g-123-qr-2015-6';

describe(`with g123Qr20156 preset`, () => {
  it(`should return a g123Qr20156 preset`, () => {
    const g123Qr20156Preset = g123Qr20156().build<TStandalonePriceDraft>();
    expect(g123Qr20156Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "g123-qr-2015-6",
        "recurrencePolicy": undefined,
        "sku": "g123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 800000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a g123Qr20156 preset when built for graphql`, () => {
    const g123Qr20156PresetGraphql =
      g123Qr20156().buildGraphql<TStandalonePriceDraft>();
    expect(g123Qr20156PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "g123-qr-2015-6",
        "recurrencePolicy": undefined,
        "sku": "g123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 800000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
