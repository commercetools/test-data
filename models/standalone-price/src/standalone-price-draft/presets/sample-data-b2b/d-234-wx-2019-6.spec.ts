import type { TStandalonePriceDraft } from '../../../types';
import d234Wx20196 from './d-234-wx-2019-6';

describe(`with d234Wx20196 preset`, () => {
  it(`should return a d234Wx20196 preset`, () => {
    const d234Wx20196Preset = d234Wx20196().build<TStandalonePriceDraft>();
    expect(d234Wx20196Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "d234-wx-2019-6",
        "sku": "d234-wx-2019",
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

  it(`should return a d234Wx20196 preset when built for graphql`, () => {
    const d234Wx20196PresetGraphql =
      d234Wx20196().buildGraphql<TStandalonePriceDraft>();
    expect(d234Wx20196PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "d234-wx-2019-6",
        "sku": "d234-wx-2019",
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
