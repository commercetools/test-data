import type { TStandalonePriceDraft } from '../../../types';
import aa123Qr20234 from './aa-123-qr-2023-4';

describe(`with aa123Qr20234 preset`, () => {
  it(`should return a aa123Qr20234 preset`, () => {
    const aa123Qr20234Preset = aa123Qr20234().build<TStandalonePriceDraft>();
    expect(aa123Qr20234Preset).toMatchInlineSnapshot(`
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
        "key": "aa123-qr-2023-4",
        "sku": "aa123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1200000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a aa123Qr20234 preset when built for graphql`, () => {
    const aa123Qr20234PresetGraphql =
      aa123Qr20234().buildGraphql<TStandalonePriceDraft>();
    expect(aa123Qr20234PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "aa123-qr-2023-4",
        "sku": "aa123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1200000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
