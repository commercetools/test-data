import type { TStandalonePriceDraft } from '../../../types';
import pp234Wx20231 from './pp-234-wx-2023-1';

describe(`with pp234Wx20231 preset`, () => {
  it(`should return a pp234Wx20231 preset`, () => {
    const pp234Wx20231Preset = pp234Wx20231().build<TStandalonePriceDraft>();
    expect(pp234Wx20231Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pp234-wx-2023-1",
        "recurrencePolicy": undefined,
        "sku": "pp234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2640000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a pp234Wx20231 preset when built for graphql`, () => {
    const pp234Wx20231PresetGraphql =
      pp234Wx20231().buildGraphql<TStandalonePriceDraft>();
    expect(pp234Wx20231PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pp234-wx-2023-1",
        "recurrencePolicy": undefined,
        "sku": "pp234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2640000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
