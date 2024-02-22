import type { TStandalonePriceDraft } from '../../../types';
import pp234Wx20234 from './pp-234-wx-2023-4';

describe(`with pp234Wx20234 preset`, () => {
  it(`should return a pp234Wx20234 preset`, () => {
    const pp234Wx20234Preset = pp234Wx20234().build<TStandalonePriceDraft>();
    expect(pp234Wx20234Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pp234-wx-2023-4",
        "sku": "pp234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2000000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a pp234Wx20234 preset when built for graphql`, () => {
    const pp234Wx20234PresetGraphql =
      pp234Wx20234().buildGraphql<TStandalonePriceDraft>();
    expect(pp234Wx20234PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pp234-wx-2023-4",
        "sku": "pp234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2000000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
