import type { TStandalonePriceDraft } from '../../../types';
import pp234Wx20153 from './pp-234-wx-2015-3';

describe(`with pp234Wx20153 preset`, () => {
  it(`should return a pp234Wx20153 preset`, () => {
    const pp234Wx20153Preset = pp234Wx20153().build<TStandalonePriceDraft>();
    expect(pp234Wx20153Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pp234-wx-2015-3",
        "sku": "pp234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2640000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a pp234Wx20153 preset when built for graphql`, () => {
    const pp234Wx20153PresetGraphql =
      pp234Wx20153().buildGraphql<TStandalonePriceDraft>();
    expect(pp234Wx20153PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pp234-wx-2015-3",
        "sku": "pp234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2640000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
