import type { TStandalonePriceDraft } from '../../../types';
import aa123Qr20157 from './aa-123-qr-2015-7';

describe(`with aa123Qr20157 preset`, () => {
  it(`should return a aa123Qr20157 preset`, () => {
    const aa123Qr20157Preset = aa123Qr20157().build<TStandalonePriceDraft>();
    expect(aa123Qr20157Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aa123-qr-2015-7",
        "sku": "aa123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1440000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a aa123Qr20157 preset when built for graphql`, () => {
    const aa123Qr20157PresetGraphql =
      aa123Qr20157().buildGraphql<TStandalonePriceDraft>();
    expect(aa123Qr20157PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aa123-qr-2015-7",
        "sku": "aa123-qr-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1440000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
