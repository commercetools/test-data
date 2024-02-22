import type { TStandalonePriceDraft } from '../../../types';
import jj234Wx20154 from './jj-234-wx-2015-4';

describe(`with jj234Wx20154 preset`, () => {
  it(`should return a jj234Wx20154 preset`, () => {
    const jj234Wx20154Preset = jj234Wx20154().build<TStandalonePriceDraft>();
    expect(jj234Wx20154Preset).toMatchInlineSnapshot(`
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
        "key": "jj234-wx-2015-4",
        "sku": "jj234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2500000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a jj234Wx20154 preset when built for graphql`, () => {
    const jj234Wx20154PresetGraphql =
      jj234Wx20154().buildGraphql<TStandalonePriceDraft>();
    expect(jj234Wx20154PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "jj234-wx-2015-4",
        "sku": "jj234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2500000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
