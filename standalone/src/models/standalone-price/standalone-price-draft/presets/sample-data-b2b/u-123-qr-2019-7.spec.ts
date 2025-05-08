import type { TStandalonePriceDraft } from '../../../types';
import u123Qr20197 from './u-123-qr-2019-7';

describe(`with u123Qr20197 preset`, () => {
  it(`should return a u123Qr20197 preset`, () => {
    const u123Qr20197Preset = u123Qr20197().build<TStandalonePriceDraft>();
    expect(u123Qr20197Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "u123-qr-2019-7",
        "sku": "u123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2160000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a u123Qr20197 preset when built for graphql`, () => {
    const u123Qr20197PresetGraphql =
      u123Qr20197().buildGraphql<TStandalonePriceDraft>();
    expect(u123Qr20197PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "u123-qr-2019-7",
        "sku": "u123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2160000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
