import type { TStandalonePriceDraft } from '../../../types';
import pp234Wx20157 from './pp-234-wx-2015-7';

describe(`with pp234Wx20157 preset`, () => {
  it(`should return a pp234Wx20157 preset`, () => {
    const pp234Wx20157Preset = pp234Wx20157().build<TStandalonePriceDraft>();
    expect(pp234Wx20157Preset).toMatchInlineSnapshot(`
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
        "key": "pp234-wx-2015-7",
        "sku": "pp234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2400000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a pp234Wx20157 preset when built for graphql`, () => {
    const pp234Wx20157PresetGraphql =
      pp234Wx20157().buildGraphql<TStandalonePriceDraft>();
    expect(pp234Wx20157PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "pp234-wx-2015-7",
        "sku": "pp234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2400000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
