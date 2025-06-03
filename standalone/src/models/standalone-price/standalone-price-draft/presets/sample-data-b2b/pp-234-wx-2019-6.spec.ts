import type { TStandalonePriceDraft } from '../../../types';
import pp234Wx20196 from './pp-234-wx-2019-6';

describe(`with pp234Wx20196 preset`, () => {
  it(`should return a pp234Wx20196 preset`, () => {
    const pp234Wx20196Preset = pp234Wx20196().build<TStandalonePriceDraft>();
    expect(pp234Wx20196Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pp234-wx-2019-6",
        "recurrencePolicy": undefined,
        "sku": "pp234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1600000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a pp234Wx20196 preset when built for graphql`, () => {
    const pp234Wx20196PresetGraphql =
      pp234Wx20196().buildGraphql<TStandalonePriceDraft>();
    expect(pp234Wx20196PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pp234-wx-2019-6",
        "recurrencePolicy": undefined,
        "sku": "pp234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1600000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
