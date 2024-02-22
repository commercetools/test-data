import type { TStandalonePriceDraft } from '../../../types';
import g123Qr20197 from './g-123-qr-2019-7';

describe(`with g123Qr20197 preset`, () => {
  it(`should return a g123Qr20197 preset`, () => {
    const g123Qr20197Preset = g123Qr20197().build<TStandalonePriceDraft>();
    expect(g123Qr20197Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "g123-qr-2019-7",
        "sku": "g123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1200000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a g123Qr20197 preset when built for graphql`, () => {
    const g123Qr20197PresetGraphql =
      g123Qr20197().buildGraphql<TStandalonePriceDraft>();
    expect(g123Qr20197PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "g123-qr-2019-7",
        "sku": "g123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1200000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
