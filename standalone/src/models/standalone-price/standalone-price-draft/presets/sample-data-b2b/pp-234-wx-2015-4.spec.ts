import type { TStandalonePriceDraft } from '../../../types';
import pp234Wx20154 from './pp-234-wx-2015-4';

describe(`with pp234Wx20154 preset`, () => {
  it(`should return a pp234Wx20154 preset`, () => {
    const pp234Wx20154Preset = pp234Wx20154().build<TStandalonePriceDraft>();
    expect(pp234Wx20154Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pp234-wx-2015-4",
        "recurrencePolicy": undefined,
        "sku": "pp234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2000000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a pp234Wx20154 preset when built for graphql`, () => {
    const pp234Wx20154PresetGraphql =
      pp234Wx20154().buildGraphql<TStandalonePriceDraft>();
    expect(pp234Wx20154PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pp234-wx-2015-4",
        "recurrencePolicy": undefined,
        "sku": "pp234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2000000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
