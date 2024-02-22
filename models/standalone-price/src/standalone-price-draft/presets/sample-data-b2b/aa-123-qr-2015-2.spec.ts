import type { TStandalonePriceDraft } from '../../../types';
import aa123Qr20152 from './aa-123-qr-2015-2';

describe(`with aa123Qr20152 preset`, () => {
  it(`should return a aa123Qr20152 preset`, () => {
    const aa123Qr20152Preset = aa123Qr20152().build<TStandalonePriceDraft>();
    expect(aa123Qr20152Preset).toMatchInlineSnapshot(`
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
        "key": "aa123-qr-2015-2",
        "sku": "aa123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1188000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a aa123Qr20152 preset when built for graphql`, () => {
    const aa123Qr20152PresetGraphql =
      aa123Qr20152().buildGraphql<TStandalonePriceDraft>();
    expect(aa123Qr20152PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "aa123-qr-2015-2",
        "sku": "aa123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1188000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
