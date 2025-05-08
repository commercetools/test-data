import type { TStandalonePriceDraft } from '../../../types';
import x234Wx20238 from './x-234-wx-2023-8';

describe(`with x234Wx20238 preset`, () => {
  it(`should return a x234Wx20238 preset`, () => {
    const x234Wx20238Preset = x234Wx20238().build<TStandalonePriceDraft>();
    expect(x234Wx20238Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x234-wx-2023-8",
        "sku": "x234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2200000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a x234Wx20238 preset when built for graphql`, () => {
    const x234Wx20238PresetGraphql =
      x234Wx20238().buildGraphql<TStandalonePriceDraft>();
    expect(x234Wx20238PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x234-wx-2023-8",
        "sku": "x234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2200000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
