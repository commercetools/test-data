import type { TStandalonePriceDraft } from '../../../types';
import dd234Wx20156 from './dd-234-wx-2015-6';

describe(`with dd234Wx20156 preset`, () => {
  it(`should return a dd234Wx20156 preset`, () => {
    const dd234Wx20156Preset = dd234Wx20156().build<TStandalonePriceDraft>();
    expect(dd234Wx20156Preset).toMatchInlineSnapshot(`
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
        "key": "dd234-wx-2015-6",
        "sku": "dd234-wx-2015",
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

  it(`should return a dd234Wx20156 preset when built for graphql`, () => {
    const dd234Wx20156PresetGraphql =
      dd234Wx20156().buildGraphql<TStandalonePriceDraft>();
    expect(dd234Wx20156PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "dd234-wx-2015-6",
        "sku": "dd234-wx-2015",
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
