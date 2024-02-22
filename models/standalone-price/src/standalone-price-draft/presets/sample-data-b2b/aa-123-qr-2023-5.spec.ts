import type { TStandalonePriceDraft } from '../../../types';
import aa123Qr20235 from './aa-123-qr-2023-5';

describe(`with aa123Qr20235 preset`, () => {
  it(`should return a aa123Qr20235 preset`, () => {
    const aa123Qr20235Preset = aa123Qr20235().build<TStandalonePriceDraft>();
    expect(aa123Qr20235Preset).toMatchInlineSnapshot(`
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
        "key": "aa123-qr-2023-5",
        "sku": "aa123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1080000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a aa123Qr20235 preset when built for graphql`, () => {
    const aa123Qr20235PresetGraphql =
      aa123Qr20235().buildGraphql<TStandalonePriceDraft>();
    expect(aa123Qr20235PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "aa123-qr-2023-5",
        "sku": "aa123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1080000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
