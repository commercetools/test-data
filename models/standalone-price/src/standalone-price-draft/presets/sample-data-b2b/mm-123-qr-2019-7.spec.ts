import type { TStandalonePriceDraft } from '../../../types';
import mm123Qr20197 from './mm-123-qr-2019-7';

describe(`with mm123Qr20197 preset`, () => {
  it(`should return a mm123Qr20197 preset`, () => {
    const mm123Qr20197Preset = mm123Qr20197().build<TStandalonePriceDraft>();
    expect(mm123Qr20197Preset).toMatchInlineSnapshot(`
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
        "key": "mm123-qr-2019-7",
        "sku": "mm123-qr-2019",
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

  it(`should return a mm123Qr20197 preset when built for graphql`, () => {
    const mm123Qr20197PresetGraphql =
      mm123Qr20197().buildGraphql<TStandalonePriceDraft>();
    expect(mm123Qr20197PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "mm123-qr-2019-7",
        "sku": "mm123-qr-2019",
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
