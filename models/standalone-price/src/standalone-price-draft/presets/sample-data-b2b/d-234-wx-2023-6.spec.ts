import type { TStandalonePriceDraft } from '../../../types';
import d234Wx20236 from './d-234-wx-2023-6';

describe(`with d234Wx20236 preset`, () => {
  it(`should return a d234Wx20236 preset`, () => {
    const d234Wx20236Preset = d234Wx20236().build<TStandalonePriceDraft>();
    expect(d234Wx20236Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "d234-wx-2023-6",
        "sku": "d234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 720000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a d234Wx20236 preset when built for graphql`, () => {
    const d234Wx20236PresetGraphql =
      d234Wx20236().buildGraphql<TStandalonePriceDraft>();
    expect(d234Wx20236PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "d234-wx-2023-6",
        "sku": "d234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 720000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
