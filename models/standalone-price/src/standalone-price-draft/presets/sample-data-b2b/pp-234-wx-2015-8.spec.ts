import type { TStandalonePriceDraft } from '../../../types';
import pp234Wx20158 from './pp-234-wx-2015-8';

describe(`with pp234Wx20158 preset`, () => {
  it(`should return a pp234Wx20158 preset`, () => {
    const pp234Wx20158Preset = pp234Wx20158().build<TStandalonePriceDraft>();
    expect(pp234Wx20158Preset).toMatchInlineSnapshot(`
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
        "key": "pp234-wx-2015-8",
        "sku": "pp234-wx-2015",
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

  it(`should return a pp234Wx20158 preset when built for graphql`, () => {
    const pp234Wx20158PresetGraphql =
      pp234Wx20158().buildGraphql<TStandalonePriceDraft>();
    expect(pp234Wx20158PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "pp234-wx-2015-8",
        "sku": "pp234-wx-2015",
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
