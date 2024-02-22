import type { TStandalonePriceDraft } from '../../../types';
import j234Wx20157 from './j-234-wx-2015-7';

describe(`with j234Wx20157 preset`, () => {
  it(`should return a j234Wx20157 preset`, () => {
    const j234Wx20157Preset = j234Wx20157().build<TStandalonePriceDraft>();
    expect(j234Wx20157Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "j234-wx-2015-7",
        "sku": "j234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1320000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a j234Wx20157 preset when built for graphql`, () => {
    const j234Wx20157PresetGraphql =
      j234Wx20157().buildGraphql<TStandalonePriceDraft>();
    expect(j234Wx20157PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "j234-wx-2015-7",
        "sku": "j234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1320000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
