import type { TStandalonePriceDraft } from '../../../types';
import aa123Qr20156 from './aa-123-qr-2015-6';

describe(`with aa123Qr20156 preset`, () => {
  it(`should return a aa123Qr20156 preset`, () => {
    const aa123Qr20156Preset = aa123Qr20156().build<TStandalonePriceDraft>();
    expect(aa123Qr20156Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aa123-qr-2015-6",
        "sku": "aa123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 960000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a aa123Qr20156 preset when built for graphql`, () => {
    const aa123Qr20156PresetGraphql =
      aa123Qr20156().buildGraphql<TStandalonePriceDraft>();
    expect(aa123Qr20156PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aa123-qr-2015-6",
        "sku": "aa123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 960000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
