import type { TStandalonePriceDraft } from '../../../types';
import pp234Wx20233 from './pp-234-wx-2023-3';

describe(`with pp234Wx20233 preset`, () => {
  it(`should return a pp234Wx20233 preset`, () => {
    const pp234Wx20233Preset = pp234Wx20233().build<TStandalonePriceDraft>();
    expect(pp234Wx20233Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pp234-wx-2023-3",
        "sku": "pp234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3080000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a pp234Wx20233 preset when built for graphql`, () => {
    const pp234Wx20233PresetGraphql =
      pp234Wx20233().buildGraphql<TStandalonePriceDraft>();
    expect(pp234Wx20233PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pp234-wx-2023-3",
        "sku": "pp234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3080000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
