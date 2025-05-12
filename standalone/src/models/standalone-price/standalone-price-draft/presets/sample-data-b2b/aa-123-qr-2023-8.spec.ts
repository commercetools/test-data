import type { TStandalonePriceDraft } from '../../../types';
import aa123Qr20238 from './aa-123-qr-2023-8';

describe(`with aa123Qr20238 preset`, () => {
  it(`should return a aa123Qr20238 preset`, () => {
    const aa123Qr20238Preset = aa123Qr20238().build<TStandalonePriceDraft>();
    expect(aa123Qr20238Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aa123-qr-2023-8",
        "sku": "aa123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1320000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a aa123Qr20238 preset when built for graphql`, () => {
    const aa123Qr20238PresetGraphql =
      aa123Qr20238().buildGraphql<TStandalonePriceDraft>();
    expect(aa123Qr20238PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aa123-qr-2023-8",
        "sku": "aa123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1320000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
