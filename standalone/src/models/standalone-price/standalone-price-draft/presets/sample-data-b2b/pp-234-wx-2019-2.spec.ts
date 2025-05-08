import type { TStandalonePriceDraft } from '../../../types';
import pp234Wx20192 from './pp-234-wx-2019-2';

describe(`with pp234Wx20192 preset`, () => {
  it(`should return a pp234Wx20192 preset`, () => {
    const pp234Wx20192Preset = pp234Wx20192().build<TStandalonePriceDraft>();
    expect(pp234Wx20192Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pp234-wx-2019-2",
        "sku": "pp234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2200000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a pp234Wx20192 preset when built for graphql`, () => {
    const pp234Wx20192PresetGraphql =
      pp234Wx20192().buildGraphql<TStandalonePriceDraft>();
    expect(pp234Wx20192PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pp234-wx-2019-2",
        "sku": "pp234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2200000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
