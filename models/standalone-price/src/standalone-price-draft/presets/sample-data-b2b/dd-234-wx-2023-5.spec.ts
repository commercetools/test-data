import type { TStandalonePriceDraft } from '../../../types';
import dd234Wx20235 from './dd-234-wx-2023-5';

describe(`with dd234Wx20235 preset`, () => {
  it(`should return a dd234Wx20235 preset`, () => {
    const dd234Wx20235Preset = dd234Wx20235().build<TStandalonePriceDraft>();
    expect(dd234Wx20235Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "dd234-wx-2023-5",
        "sku": "dd234-wx-2023",
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

  it(`should return a dd234Wx20235 preset when built for graphql`, () => {
    const dd234Wx20235PresetGraphql =
      dd234Wx20235().buildGraphql<TStandalonePriceDraft>();
    expect(dd234Wx20235PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "dd234-wx-2023-5",
        "sku": "dd234-wx-2023",
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
