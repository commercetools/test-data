import type { TStandalonePriceDraft } from '../../../types';
import x234Wx20231 from './x-234-wx-2023-1';

describe(`with x234Wx20231 preset`, () => {
  it(`should return a x234Wx20231 preset`, () => {
    const x234Wx20231Preset = x234Wx20231().build<TStandalonePriceDraft>();
    expect(x234Wx20231Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x234-wx-2023-1",
        "sku": "x234-wx-2023",
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

  it(`should return a x234Wx20231 preset when built for graphql`, () => {
    const x234Wx20231PresetGraphql =
      x234Wx20231().buildGraphql<TStandalonePriceDraft>();
    expect(x234Wx20231PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x234-wx-2023-1",
        "sku": "x234-wx-2023",
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
