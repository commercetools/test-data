import type { TStandalonePriceDraft } from '../../../types';
import aa123Qr20154 from './aa-123-qr-2015-4';

describe(`with aa123Qr20154 preset`, () => {
  it(`should return a aa123Qr20154 preset`, () => {
    const aa123Qr20154Preset = aa123Qr20154().build<TStandalonePriceDraft>();
    expect(aa123Qr20154Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aa123-qr-2015-4",
        "sku": "aa123-qr-2015",
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

  it(`should return a aa123Qr20154 preset when built for graphql`, () => {
    const aa123Qr20154PresetGraphql =
      aa123Qr20154().buildGraphql<TStandalonePriceDraft>();
    expect(aa123Qr20154PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aa123-qr-2015-4",
        "sku": "aa123-qr-2015",
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
