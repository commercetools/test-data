import type { TStandalonePriceDraft } from '../../../types';
import pp234Wx20198 from './pp-234-wx-2019-8';

describe(`with pp234Wx20198 preset`, () => {
  it(`should return a pp234Wx20198 preset`, () => {
    const pp234Wx20198Preset = pp234Wx20198().build<TStandalonePriceDraft>();
    expect(pp234Wx20198Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pp234-wx-2019-8",
        "sku": "pp234-wx-2019",
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

  it(`should return a pp234Wx20198 preset when built for graphql`, () => {
    const pp234Wx20198PresetGraphql =
      pp234Wx20198().buildGraphql<TStandalonePriceDraft>();
    expect(pp234Wx20198PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pp234-wx-2019-8",
        "sku": "pp234-wx-2019",
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
