import type { TStandalonePriceDraft } from '../../../types';
import j234Wx20154 from './j-234-wx-2015-4';

describe(`with j234Wx20154 preset`, () => {
  it(`should return a j234Wx20154 preset`, () => {
    const j234Wx20154Preset = j234Wx20154().build<TStandalonePriceDraft>();
    expect(j234Wx20154Preset).toMatchInlineSnapshot(`
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
        "key": "j234-wx-2015-4",
        "sku": "j234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1100000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a j234Wx20154 preset when built for graphql`, () => {
    const j234Wx20154PresetGraphql =
      j234Wx20154().buildGraphql<TStandalonePriceDraft>();
    expect(j234Wx20154PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "j234-wx-2015-4",
        "sku": "j234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1100000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
