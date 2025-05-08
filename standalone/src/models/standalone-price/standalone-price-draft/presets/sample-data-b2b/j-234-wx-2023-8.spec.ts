import type { TStandalonePriceDraft } from '../../../types';
import j234Wx20238 from './j-234-wx-2023-8';

describe(`with j234Wx20238 preset`, () => {
  it(`should return a j234Wx20238 preset`, () => {
    const j234Wx20238Preset = j234Wx20238().build<TStandalonePriceDraft>();
    expect(j234Wx20238Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "j234-wx-2023-8",
        "sku": "j234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1210000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a j234Wx20238 preset when built for graphql`, () => {
    const j234Wx20238PresetGraphql =
      j234Wx20238().buildGraphql<TStandalonePriceDraft>();
    expect(j234Wx20238PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "j234-wx-2023-8",
        "sku": "j234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1210000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
