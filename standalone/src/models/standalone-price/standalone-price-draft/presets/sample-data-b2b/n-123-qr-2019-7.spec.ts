import type { TStandalonePriceDraft } from '../../../types';
import n123Qr20197 from './n-123-qr-2019-7';

describe(`with n123Qr20197 preset`, () => {
  it(`should return a n123Qr20197 preset`, () => {
    const n123Qr20197Preset = n123Qr20197().build<TStandalonePriceDraft>();
    expect(n123Qr20197Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2019-7",
        "sku": "n123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 960000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a n123Qr20197 preset when built for graphql`, () => {
    const n123Qr20197PresetGraphql =
      n123Qr20197().buildGraphql<TStandalonePriceDraft>();
    expect(n123Qr20197PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "n123-qr-2019-7",
        "sku": "n123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 960000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
