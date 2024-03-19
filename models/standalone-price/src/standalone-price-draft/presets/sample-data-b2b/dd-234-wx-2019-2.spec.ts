import type { TStandalonePriceDraft } from '../../../types';
import dd234Wx20192 from './dd-234-wx-2019-2';

describe(`with dd234Wx20192 preset`, () => {
  it(`should return a dd234Wx20192 preset`, () => {
    const dd234Wx20192Preset = dd234Wx20192().build<TStandalonePriceDraft>();
    expect(dd234Wx20192Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "dd234-wx-2019-2",
        "sku": "dd234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1650000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a dd234Wx20192 preset when built for graphql`, () => {
    const dd234Wx20192PresetGraphql =
      dd234Wx20192().buildGraphql<TStandalonePriceDraft>();
    expect(dd234Wx20192PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "dd234-wx-2019-2",
        "sku": "dd234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1650000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
