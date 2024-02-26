import type { TStandalonePriceDraft } from '../../../types';
import dd234Wx20154 from './dd-234-wx-2015-4';

describe(`with dd234Wx20154 preset`, () => {
  it(`should return a dd234Wx20154 preset`, () => {
    const dd234Wx20154Preset = dd234Wx20154().build<TStandalonePriceDraft>();
    expect(dd234Wx20154Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "dd234-wx-2015-4",
        "sku": "dd234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1500000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a dd234Wx20154 preset when built for graphql`, () => {
    const dd234Wx20154PresetGraphql =
      dd234Wx20154().buildGraphql<TStandalonePriceDraft>();
    expect(dd234Wx20154PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "dd234-wx-2015-4",
        "sku": "dd234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1500000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
