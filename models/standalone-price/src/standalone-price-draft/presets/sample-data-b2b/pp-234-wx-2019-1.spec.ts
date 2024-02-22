import type { TStandalonePriceDraft } from '../../../types';
import pp234Wx20191 from './pp-234-wx-2019-1';

describe(`with pp234Wx20191 preset`, () => {
  it(`should return a pp234Wx20191 preset`, () => {
    const pp234Wx20191Preset = pp234Wx20191().build<TStandalonePriceDraft>();
    expect(pp234Wx20191Preset).toMatchInlineSnapshot(`
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
        "key": "pp234-wx-2019-1",
        "sku": "pp234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2420000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a pp234Wx20191 preset when built for graphql`, () => {
    const pp234Wx20191PresetGraphql =
      pp234Wx20191().buildGraphql<TStandalonePriceDraft>();
    expect(pp234Wx20191PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "pp234-wx-2019-1",
        "sku": "pp234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2420000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
