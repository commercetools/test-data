import type { TStandalonePriceDraft } from '../../../types';
import pp234Wx20232 from './pp-234-wx-2023-2';

describe(`with pp234Wx20232 preset`, () => {
  it(`should return a pp234Wx20232 preset`, () => {
    const pp234Wx20232Preset = pp234Wx20232().build<TStandalonePriceDraft>();
    expect(pp234Wx20232Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pp234-wx-2023-2",
        "sku": "pp234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2420000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a pp234Wx20232 preset when built for graphql`, () => {
    const pp234Wx20232PresetGraphql =
      pp234Wx20232().buildGraphql<TStandalonePriceDraft>();
    expect(pp234Wx20232PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pp234-wx-2023-2",
        "sku": "pp234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2420000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
