import type { TStandalonePriceDraft } from '../../../types';
import aa123Qr20155 from './aa-123-qr-2015-5';

describe(`with aa123Qr20155 preset`, () => {
  it(`should return a aa123Qr20155 preset`, () => {
    const aa123Qr20155Preset = aa123Qr20155().build<TStandalonePriceDraft>();
    expect(aa123Qr20155Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aa123-qr-2015-5",
        "sku": "aa123-qr-2015",
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

  it(`should return a aa123Qr20155 preset when built for graphql`, () => {
    const aa123Qr20155PresetGraphql =
      aa123Qr20155().buildGraphql<TStandalonePriceDraft>();
    expect(aa123Qr20155PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aa123-qr-2015-5",
        "sku": "aa123-qr-2015",
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
