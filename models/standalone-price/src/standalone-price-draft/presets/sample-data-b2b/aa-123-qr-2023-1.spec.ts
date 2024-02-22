import type { TStandalonePriceDraft } from '../../../types';
import aa123Qr20231 from './aa-123-qr-2023-1';

describe(`with aa123Qr20231 preset`, () => {
  it(`should return a aa123Qr20231 preset`, () => {
    const aa123Qr20231Preset = aa123Qr20231().build<TStandalonePriceDraft>();
    expect(aa123Qr20231Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aa123-qr-2023-1",
        "sku": "aa123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1584000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a aa123Qr20231 preset when built for graphql`, () => {
    const aa123Qr20231PresetGraphql =
      aa123Qr20231().buildGraphql<TStandalonePriceDraft>();
    expect(aa123Qr20231PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aa123-qr-2023-1",
        "sku": "aa123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1584000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
