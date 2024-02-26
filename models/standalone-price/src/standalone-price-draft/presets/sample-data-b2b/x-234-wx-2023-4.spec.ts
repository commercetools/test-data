import type { TStandalonePriceDraft } from '../../../types';
import x234Wx20234 from './x-234-wx-2023-4';

describe(`with x234Wx20234 preset`, () => {
  it(`should return a x234Wx20234 preset`, () => {
    const x234Wx20234Preset = x234Wx20234().build<TStandalonePriceDraft>();
    expect(x234Wx20234Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x234-wx-2023-4",
        "sku": "x234-wx-2023",
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

  it(`should return a x234Wx20234 preset when built for graphql`, () => {
    const x234Wx20234PresetGraphql =
      x234Wx20234().buildGraphql<TStandalonePriceDraft>();
    expect(x234Wx20234PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x234-wx-2023-4",
        "sku": "x234-wx-2023",
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
