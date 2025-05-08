import type { TStandalonePriceDraft } from '../../../types';
import aa123Qr20233 from './aa-123-qr-2023-3';

describe(`with aa123Qr20233 preset`, () => {
  it(`should return a aa123Qr20233 preset`, () => {
    const aa123Qr20233Preset = aa123Qr20233().build<TStandalonePriceDraft>();
    expect(aa123Qr20233Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aa123-qr-2023-3",
        "sku": "aa123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1848000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a aa123Qr20233 preset when built for graphql`, () => {
    const aa123Qr20233PresetGraphql =
      aa123Qr20233().buildGraphql<TStandalonePriceDraft>();
    expect(aa123Qr20233PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aa123-qr-2023-3",
        "sku": "aa123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1848000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
