import type { TStandalonePriceDraft } from '../../../types';
import dd234Wx20196 from './dd-234-wx-2019-6';

describe(`with dd234Wx20196 preset`, () => {
  it(`should return a dd234Wx20196 preset`, () => {
    const dd234Wx20196Preset = dd234Wx20196().build<TStandalonePriceDraft>();
    expect(dd234Wx20196Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "dd234-wx-2019-6",
        "recurrencePolicy": undefined,
        "sku": "dd234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1200000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a dd234Wx20196 preset when built for graphql`, () => {
    const dd234Wx20196PresetGraphql =
      dd234Wx20196().buildGraphql<TStandalonePriceDraft>();
    expect(dd234Wx20196PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "dd234-wx-2019-6",
        "recurrencePolicy": undefined,
        "sku": "dd234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1200000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
