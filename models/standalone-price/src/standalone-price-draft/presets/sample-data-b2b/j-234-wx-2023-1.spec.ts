import type { TStandalonePriceDraft } from '../../../types';
import j234Wx20231 from './j-234-wx-2023-1';

describe(`with j234Wx20231 preset`, () => {
  it(`should return a j234Wx20231 preset`, () => {
    const j234Wx20231Preset = j234Wx20231().build<TStandalonePriceDraft>();
    expect(j234Wx20231Preset).toMatchInlineSnapshot(`
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
        "key": "j234-wx-2023-1",
        "sku": "j234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1452000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a j234Wx20231 preset when built for graphql`, () => {
    const j234Wx20231PresetGraphql =
      j234Wx20231().buildGraphql<TStandalonePriceDraft>();
    expect(j234Wx20231PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "j234-wx-2023-1",
        "sku": "j234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1452000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
