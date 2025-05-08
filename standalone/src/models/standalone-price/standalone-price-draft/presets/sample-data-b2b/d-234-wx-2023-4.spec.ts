import type { TStandalonePriceDraft } from '../../../types';
import d234Wx20234 from './d-234-wx-2023-4';

describe(`with d234Wx20234 preset`, () => {
  it(`should return a d234Wx20234 preset`, () => {
    const d234Wx20234Preset = d234Wx20234().build<TStandalonePriceDraft>();
    expect(d234Wx20234Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "d234-wx-2023-4",
        "sku": "d234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 900000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a d234Wx20234 preset when built for graphql`, () => {
    const d234Wx20234PresetGraphql =
      d234Wx20234().buildGraphql<TStandalonePriceDraft>();
    expect(d234Wx20234PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "d234-wx-2023-4",
        "sku": "d234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 900000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
