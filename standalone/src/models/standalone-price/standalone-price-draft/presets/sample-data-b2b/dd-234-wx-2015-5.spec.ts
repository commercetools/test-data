import type { TStandalonePriceDraft } from '../../../types';
import dd234Wx20155 from './dd-234-wx-2015-5';

describe(`with dd234Wx20155 preset`, () => {
  it(`should return a dd234Wx20155 preset`, () => {
    const dd234Wx20155Preset = dd234Wx20155().build<TStandalonePriceDraft>();
    expect(dd234Wx20155Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "dd234-wx-2015-5",
        "recurrencePolicy": undefined,
        "sku": "dd234-wx-2015",
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

  it(`should return a dd234Wx20155 preset when built for graphql`, () => {
    const dd234Wx20155PresetGraphql =
      dd234Wx20155().buildGraphql<TStandalonePriceDraft>();
    expect(dd234Wx20155PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "dd234-wx-2015-5",
        "recurrencePolicy": undefined,
        "sku": "dd234-wx-2015",
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
