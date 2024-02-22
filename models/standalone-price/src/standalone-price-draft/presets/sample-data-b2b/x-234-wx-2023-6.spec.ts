import type { TStandalonePriceDraft } from '../../../types';
import x234Wx20236 from './x-234-wx-2023-6';

describe(`with x234Wx20236 preset`, () => {
  it(`should return a x234Wx20236 preset`, () => {
    const x234Wx20236Preset = x234Wx20236().build<TStandalonePriceDraft>();
    expect(x234Wx20236Preset).toMatchInlineSnapshot(`
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
        "key": "x234-wx-2023-6",
        "sku": "x234-wx-2023",
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

  it(`should return a x234Wx20236 preset when built for graphql`, () => {
    const x234Wx20236PresetGraphql =
      x234Wx20236().buildGraphql<TStandalonePriceDraft>();
    expect(x234Wx20236PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "x234-wx-2023-6",
        "sku": "x234-wx-2023",
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
