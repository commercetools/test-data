import type { TStandalonePriceDraft } from '../../../types';
import g123Qr20234 from './g-123-qr-2023-4';

describe(`with g123Qr20234 preset`, () => {
  it(`should return a g123Qr20234 preset`, () => {
    const g123Qr20234Preset = g123Qr20234().build<TStandalonePriceDraft>();
    expect(g123Qr20234Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "g123-qr-2023-4",
        "recurrencePolicy": undefined,
        "sku": "g123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1000000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a g123Qr20234 preset when built for graphql`, () => {
    const g123Qr20234PresetGraphql =
      g123Qr20234().buildGraphql<TStandalonePriceDraft>();
    expect(g123Qr20234PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "g123-qr-2023-4",
        "recurrencePolicy": undefined,
        "sku": "g123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1000000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
