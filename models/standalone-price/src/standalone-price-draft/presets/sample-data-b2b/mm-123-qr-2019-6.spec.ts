import type { TStandalonePriceDraft } from '../../../types';
import mm123Qr20196 from './mm-123-qr-2019-6';

describe(`with mm123Qr20196 preset`, () => {
  it(`should return a mm123Qr20196 preset`, () => {
    const mm123Qr20196Preset = mm123Qr20196().build<TStandalonePriceDraft>();
    expect(mm123Qr20196Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "mm123-qr-2019-6",
        "sku": "mm123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1440000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a mm123Qr20196 preset when built for graphql`, () => {
    const mm123Qr20196PresetGraphql =
      mm123Qr20196().buildGraphql<TStandalonePriceDraft>();
    expect(mm123Qr20196PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "mm123-qr-2019-6",
        "sku": "mm123-qr-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1440000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
