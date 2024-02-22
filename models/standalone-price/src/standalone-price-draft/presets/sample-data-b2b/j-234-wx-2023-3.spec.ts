import type { TStandalonePriceDraft } from '../../../types';
import j234Wx20233 from './j-234-wx-2023-3';

describe(`with j234Wx20233 preset`, () => {
  it(`should return a j234Wx20233 preset`, () => {
    const j234Wx20233Preset = j234Wx20233().build<TStandalonePriceDraft>();
    expect(j234Wx20233Preset).toMatchInlineSnapshot(`
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
        "key": "j234-wx-2023-3",
        "sku": "j234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1694000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a j234Wx20233 preset when built for graphql`, () => {
    const j234Wx20233PresetGraphql =
      j234Wx20233().buildGraphql<TStandalonePriceDraft>();
    expect(j234Wx20233PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "j234-wx-2023-3",
        "sku": "j234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1694000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
