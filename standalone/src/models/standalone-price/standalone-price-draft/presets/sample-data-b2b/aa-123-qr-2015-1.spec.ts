import type { TStandalonePriceDraft } from '../../../types';
import aa123Qr20151 from './aa-123-qr-2015-1';

describe(`with aa123Qr20151 preset`, () => {
  it(`should return a aa123Qr20151 preset`, () => {
    const aa123Qr20151Preset = aa123Qr20151().build<TStandalonePriceDraft>();
    expect(aa123Qr20151Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aa123-qr-2015-1",
        "sku": "aa123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1320000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a aa123Qr20151 preset when built for graphql`, () => {
    const aa123Qr20151PresetGraphql =
      aa123Qr20151().buildGraphql<TStandalonePriceDraft>();
    expect(aa123Qr20151PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aa123-qr-2015-1",
        "sku": "aa123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1320000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
