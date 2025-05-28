import type { TStandalonePriceDraft } from '../../../types';
import mm123Qr20234 from './mm-123-qr-2023-4';

describe(`with mm123Qr20234 preset`, () => {
  it(`should return a mm123Qr20234 preset`, () => {
    const mm123Qr20234Preset = mm123Qr20234().build<TStandalonePriceDraft>();
    expect(mm123Qr20234Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "mm123-qr-2023-4",
        "recurrencePolicy": undefined,
        "sku": "mm123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1800000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a mm123Qr20234 preset when built for graphql`, () => {
    const mm123Qr20234PresetGraphql =
      mm123Qr20234().buildGraphql<TStandalonePriceDraft>();
    expect(mm123Qr20234PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "mm123-qr-2023-4",
        "recurrencePolicy": undefined,
        "sku": "mm123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1800000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
