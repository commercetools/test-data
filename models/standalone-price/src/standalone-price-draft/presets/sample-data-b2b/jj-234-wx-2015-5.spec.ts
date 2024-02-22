import type { TStandalonePriceDraft } from '../../../types';
import jj234Wx20155 from './jj-234-wx-2015-5';

describe(`with jj234Wx20155 preset`, () => {
  it(`should return a jj234Wx20155 preset`, () => {
    const jj234Wx20155Preset = jj234Wx20155().build<TStandalonePriceDraft>();
    expect(jj234Wx20155Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jj234-wx-2015-5",
        "sku": "jj234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2250000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a jj234Wx20155 preset when built for graphql`, () => {
    const jj234Wx20155PresetGraphql =
      jj234Wx20155().buildGraphql<TStandalonePriceDraft>();
    expect(jj234Wx20155PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jj234-wx-2015-5",
        "sku": "jj234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2250000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
