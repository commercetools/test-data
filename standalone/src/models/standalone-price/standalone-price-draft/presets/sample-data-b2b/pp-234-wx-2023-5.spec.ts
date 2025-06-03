import type { TStandalonePriceDraft } from '../../../types';
import pp234Wx20235 from './pp-234-wx-2023-5';

describe(`with pp234Wx20235 preset`, () => {
  it(`should return a pp234Wx20235 preset`, () => {
    const pp234Wx20235Preset = pp234Wx20235().build<TStandalonePriceDraft>();
    expect(pp234Wx20235Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pp234-wx-2023-5",
        "recurrencePolicy": undefined,
        "sku": "pp234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1800000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a pp234Wx20235 preset when built for graphql`, () => {
    const pp234Wx20235PresetGraphql =
      pp234Wx20235().buildGraphql<TStandalonePriceDraft>();
    expect(pp234Wx20235PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pp234-wx-2023-5",
        "recurrencePolicy": undefined,
        "sku": "pp234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1800000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
