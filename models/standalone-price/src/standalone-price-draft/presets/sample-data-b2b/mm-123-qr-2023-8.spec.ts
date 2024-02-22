import type { TStandalonePriceDraft } from '../../../types';
import mm123Qr20238 from './mm-123-qr-2023-8';

describe(`with mm123Qr20238 preset`, () => {
  it(`should return a mm123Qr20238 preset`, () => {
    const mm123Qr20238Preset = mm123Qr20238().build<TStandalonePriceDraft>();
    expect(mm123Qr20238Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "mm123-qr-2023-8",
        "sku": "mm123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1980001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a mm123Qr20238 preset when built for graphql`, () => {
    const mm123Qr20238PresetGraphql =
      mm123Qr20238().buildGraphql<TStandalonePriceDraft>();
    expect(mm123Qr20238PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "mm123-qr-2023-8",
        "sku": "mm123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1980001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
