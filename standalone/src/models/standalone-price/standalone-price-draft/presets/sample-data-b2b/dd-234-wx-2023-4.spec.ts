import type { TStandalonePriceDraft } from '../../../types';
import dd234Wx20234 from './dd-234-wx-2023-4';

describe(`with dd234Wx20234 preset`, () => {
  it(`should return a dd234Wx20234 preset`, () => {
    const dd234Wx20234Preset = dd234Wx20234().build<TStandalonePriceDraft>();
    expect(dd234Wx20234Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "dd234-wx-2023-4",
        "recurrencePolicy": undefined,
        "sku": "dd234-wx-2023",
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

  it(`should return a dd234Wx20234 preset when built for graphql`, () => {
    const dd234Wx20234PresetGraphql =
      dd234Wx20234().buildGraphql<TStandalonePriceDraft>();
    expect(dd234Wx20234PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "dd234-wx-2023-4",
        "recurrencePolicy": undefined,
        "sku": "dd234-wx-2023",
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
