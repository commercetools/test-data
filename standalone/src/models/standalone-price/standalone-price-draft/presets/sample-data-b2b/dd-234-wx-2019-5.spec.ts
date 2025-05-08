import type { TStandalonePriceDraft } from '../../../types';
import dd234Wx20195 from './dd-234-wx-2019-5';

describe(`with dd234Wx20195 preset`, () => {
  it(`should return a dd234Wx20195 preset`, () => {
    const dd234Wx20195Preset = dd234Wx20195().build<TStandalonePriceDraft>();
    expect(dd234Wx20195Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "dd234-wx-2019-5",
        "sku": "dd234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1350000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a dd234Wx20195 preset when built for graphql`, () => {
    const dd234Wx20195PresetGraphql =
      dd234Wx20195().buildGraphql<TStandalonePriceDraft>();
    expect(dd234Wx20195PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "dd234-wx-2019-5",
        "sku": "dd234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1350000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
