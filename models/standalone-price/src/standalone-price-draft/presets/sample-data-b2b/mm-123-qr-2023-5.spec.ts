import type { TStandalonePriceDraft } from '../../../types';
import mm123Qr20235 from './mm-123-qr-2023-5';

describe(`with mm123Qr20235 preset`, () => {
  it(`should return a mm123Qr20235 preset`, () => {
    const mm123Qr20235Preset = mm123Qr20235().build<TStandalonePriceDraft>();
    expect(mm123Qr20235Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "mm123-qr-2023-5",
        "sku": "mm123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1620000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a mm123Qr20235 preset when built for graphql`, () => {
    const mm123Qr20235PresetGraphql =
      mm123Qr20235().buildGraphql<TStandalonePriceDraft>();
    expect(mm123Qr20235PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "mm123-qr-2023-5",
        "sku": "mm123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1620000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
