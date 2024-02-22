import type { TStandalonePriceDraft } from '../../../types';
import dd234Wx20238 from './dd-234-wx-2023-8';

describe(`with dd234Wx20238 preset`, () => {
  it(`should return a dd234Wx20238 preset`, () => {
    const dd234Wx20238Preset = dd234Wx20238().build<TStandalonePriceDraft>();
    expect(dd234Wx20238Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "dd234-wx-2023-8",
        "sku": "dd234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1650001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a dd234Wx20238 preset when built for graphql`, () => {
    const dd234Wx20238PresetGraphql =
      dd234Wx20238().buildGraphql<TStandalonePriceDraft>();
    expect(dd234Wx20238PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "dd234-wx-2023-8",
        "sku": "dd234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1650001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
