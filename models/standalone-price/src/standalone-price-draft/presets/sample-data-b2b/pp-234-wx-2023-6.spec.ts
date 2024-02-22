import type { TStandalonePriceDraft } from '../../../types';
import pp234Wx20236 from './pp-234-wx-2023-6';

describe(`with pp234Wx20236 preset`, () => {
  it(`should return a pp234Wx20236 preset`, () => {
    const pp234Wx20236Preset = pp234Wx20236().build<TStandalonePriceDraft>();
    expect(pp234Wx20236Preset).toMatchInlineSnapshot(`
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
        "key": "pp234-wx-2023-6",
        "sku": "pp234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1600000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a pp234Wx20236 preset when built for graphql`, () => {
    const pp234Wx20236PresetGraphql =
      pp234Wx20236().buildGraphql<TStandalonePriceDraft>();
    expect(pp234Wx20236PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "pp234-wx-2023-6",
        "sku": "pp234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1600000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
