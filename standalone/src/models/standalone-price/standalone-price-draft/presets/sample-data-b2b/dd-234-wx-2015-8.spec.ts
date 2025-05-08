import type { TStandalonePriceDraft } from '../../../types';
import dd234Wx20158 from './dd-234-wx-2015-8';

describe(`with dd234Wx20158 preset`, () => {
  it(`should return a dd234Wx20158 preset`, () => {
    const dd234Wx20158Preset = dd234Wx20158().build<TStandalonePriceDraft>();
    expect(dd234Wx20158Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "dd234-wx-2015-8",
        "sku": "dd234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1650001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a dd234Wx20158 preset when built for graphql`, () => {
    const dd234Wx20158PresetGraphql =
      dd234Wx20158().buildGraphql<TStandalonePriceDraft>();
    expect(dd234Wx20158PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "dd234-wx-2015-8",
        "sku": "dd234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1650001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
