import type { TStandalonePriceDraft } from '../../../types';
import dd234Wx20236 from './dd-234-wx-2023-6';

describe(`with dd234Wx20236 preset`, () => {
  it(`should return a dd234Wx20236 preset`, () => {
    const dd234Wx20236Preset = dd234Wx20236().build<TStandalonePriceDraft>();
    expect(dd234Wx20236Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "dd234-wx-2023-6",
        "recurrencePolicy": undefined,
        "sku": "dd234-wx-2023",
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

  it(`should return a dd234Wx20236 preset when built for graphql`, () => {
    const dd234Wx20236PresetGraphql =
      dd234Wx20236().buildGraphql<TStandalonePriceDraft>();
    expect(dd234Wx20236PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "dd234-wx-2023-6",
        "recurrencePolicy": undefined,
        "sku": "dd234-wx-2023",
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
