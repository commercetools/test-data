import type { TStandalonePriceDraft } from '../../../types';
import j234Wx20236 from './j-234-wx-2023-6';

describe(`with j234Wx20236 preset`, () => {
  it(`should return a j234Wx20236 preset`, () => {
    const j234Wx20236Preset = j234Wx20236().build<TStandalonePriceDraft>();
    expect(j234Wx20236Preset).toMatchInlineSnapshot(`
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
        "key": "j234-wx-2023-6",
        "sku": "j234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 880000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a j234Wx20236 preset when built for graphql`, () => {
    const j234Wx20236PresetGraphql =
      j234Wx20236().buildGraphql<TStandalonePriceDraft>();
    expect(j234Wx20236PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "j234-wx-2023-6",
        "sku": "j234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 880000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
