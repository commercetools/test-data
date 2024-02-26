import type { TStandalonePriceDraft } from '../../../types';
import jj234Wx20196 from './jj-234-wx-2019-6';

describe(`with jj234Wx20196 preset`, () => {
  it(`should return a jj234Wx20196 preset`, () => {
    const jj234Wx20196Preset = jj234Wx20196().build<TStandalonePriceDraft>();
    expect(jj234Wx20196Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jj234-wx-2019-6",
        "sku": "jj234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2000000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a jj234Wx20196 preset when built for graphql`, () => {
    const jj234Wx20196PresetGraphql =
      jj234Wx20196().buildGraphql<TStandalonePriceDraft>();
    expect(jj234Wx20196PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jj234-wx-2019-6",
        "sku": "jj234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2000000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
