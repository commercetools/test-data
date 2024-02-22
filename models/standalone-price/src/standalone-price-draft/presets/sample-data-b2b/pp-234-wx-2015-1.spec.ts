import type { TStandalonePriceDraft } from '../../../types';
import pp234Wx20151 from './pp-234-wx-2015-1';

describe(`with pp234Wx20151 preset`, () => {
  it(`should return a pp234Wx20151 preset`, () => {
    const pp234Wx20151Preset = pp234Wx20151().build<TStandalonePriceDraft>();
    expect(pp234Wx20151Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pp234-wx-2015-1",
        "sku": "pp234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2200000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a pp234Wx20151 preset when built for graphql`, () => {
    const pp234Wx20151PresetGraphql =
      pp234Wx20151().buildGraphql<TStandalonePriceDraft>();
    expect(pp234Wx20151PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pp234-wx-2015-1",
        "sku": "pp234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2200000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
