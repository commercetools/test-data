import type { TStandalonePriceDraft } from '../../../types';
import j234Wx20195 from './j-234-wx-2019-5';

describe(`with j234Wx20195 preset`, () => {
  it(`should return a j234Wx20195 preset`, () => {
    const j234Wx20195Preset = j234Wx20195().build<TStandalonePriceDraft>();
    expect(j234Wx20195Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "j234-wx-2019-5",
        "sku": "j234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 990000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a j234Wx20195 preset when built for graphql`, () => {
    const j234Wx20195PresetGraphql =
      j234Wx20195().buildGraphql<TStandalonePriceDraft>();
    expect(j234Wx20195PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "j234-wx-2019-5",
        "sku": "j234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 990000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
