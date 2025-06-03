import type { TStandalonePriceDraft } from '../../../types';
import g123Qr20196 from './g-123-qr-2019-6';

describe(`with g123Qr20196 preset`, () => {
  it(`should return a g123Qr20196 preset`, () => {
    const g123Qr20196Preset = g123Qr20196().build<TStandalonePriceDraft>();
    expect(g123Qr20196Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "g123-qr-2019-6",
        "recurrencePolicy": undefined,
        "sku": "g123-qr-2019",
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

  it(`should return a g123Qr20196 preset when built for graphql`, () => {
    const g123Qr20196PresetGraphql =
      g123Qr20196().buildGraphql<TStandalonePriceDraft>();
    expect(g123Qr20196PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "g123-qr-2019-6",
        "recurrencePolicy": undefined,
        "sku": "g123-qr-2019",
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
