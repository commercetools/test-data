import type { TStandalonePriceDraft } from '../../../types';
import pp234Wx20195 from './pp-234-wx-2019-5';

describe(`with pp234Wx20195 preset`, () => {
  it(`should return a pp234Wx20195 preset`, () => {
    const pp234Wx20195Preset = pp234Wx20195().build<TStandalonePriceDraft>();
    expect(pp234Wx20195Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pp234-wx-2019-5",
        "recurrencePolicy": undefined,
        "sku": "pp234-wx-2019",
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

  it(`should return a pp234Wx20195 preset when built for graphql`, () => {
    const pp234Wx20195PresetGraphql =
      pp234Wx20195().buildGraphql<TStandalonePriceDraft>();
    expect(pp234Wx20195PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pp234-wx-2019-5",
        "recurrencePolicy": undefined,
        "sku": "pp234-wx-2019",
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
