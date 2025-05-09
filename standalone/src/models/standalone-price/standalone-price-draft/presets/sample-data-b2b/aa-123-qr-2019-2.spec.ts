import type { TStandalonePriceDraft } from '../../../types';
import aa123Qr20192 from './aa-123-qr-2019-2';

describe(`with aa123Qr20192 preset`, () => {
  it(`should return a aa123Qr20192 preset`, () => {
    const aa123Qr20192Preset = aa123Qr20192().build<TStandalonePriceDraft>();
    expect(aa123Qr20192Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aa123-qr-2019-2",
        "sku": "aa123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1320000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a aa123Qr20192 preset when built for graphql`, () => {
    const aa123Qr20192PresetGraphql =
      aa123Qr20192().buildGraphql<TStandalonePriceDraft>();
    expect(aa123Qr20192PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aa123-qr-2019-2",
        "sku": "aa123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1320000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
