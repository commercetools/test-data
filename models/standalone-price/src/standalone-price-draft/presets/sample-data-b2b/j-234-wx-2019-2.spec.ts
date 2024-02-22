import type { TStandalonePriceDraft } from '../../../types';
import j234Wx20192 from './j-234-wx-2019-2';

describe(`with j234Wx20192 preset`, () => {
  it(`should return a j234Wx20192 preset`, () => {
    const j234Wx20192Preset = j234Wx20192().build<TStandalonePriceDraft>();
    expect(j234Wx20192Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "j234-wx-2019-2",
        "sku": "j234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1210000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a j234Wx20192 preset when built for graphql`, () => {
    const j234Wx20192PresetGraphql =
      j234Wx20192().buildGraphql<TStandalonePriceDraft>();
    expect(j234Wx20192PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "j234-wx-2019-2",
        "sku": "j234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1210000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
