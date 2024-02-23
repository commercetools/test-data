import type { TStandalonePriceDraft } from '../../../types';
import x234Wx20196 from './x-234-wx-2019-6';

describe(`with x234Wx20196 preset`, () => {
  it(`should return a x234Wx20196 preset`, () => {
    const x234Wx20196Preset = x234Wx20196().build<TStandalonePriceDraft>();
    expect(x234Wx20196Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x234-wx-2019-6",
        "sku": "x234-wx-2019",
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

  it(`should return a x234Wx20196 preset when built for graphql`, () => {
    const x234Wx20196PresetGraphql =
      x234Wx20196().buildGraphql<TStandalonePriceDraft>();
    expect(x234Wx20196PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x234-wx-2019-6",
        "sku": "x234-wx-2019",
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
