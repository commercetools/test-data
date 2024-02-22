import type { TStandalonePriceDraft } from '../../../types';
import dd234Wx20233 from './dd-234-wx-2023-3';

describe(`with dd234Wx20233 preset`, () => {
  it(`should return a dd234Wx20233 preset`, () => {
    const dd234Wx20233Preset = dd234Wx20233().build<TStandalonePriceDraft>();
    expect(dd234Wx20233Preset).toMatchInlineSnapshot(`
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
        "key": "dd234-wx-2023-3",
        "sku": "dd234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2310000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a dd234Wx20233 preset when built for graphql`, () => {
    const dd234Wx20233PresetGraphql =
      dd234Wx20233().buildGraphql<TStandalonePriceDraft>();
    expect(dd234Wx20233PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "dd234-wx-2023-3",
        "sku": "dd234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2310000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
