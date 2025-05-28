import type { TStandalonePriceDraft } from '../../../types';
import j234Wx20155 from './j-234-wx-2015-5';

describe(`with j234Wx20155 preset`, () => {
  it(`should return a j234Wx20155 preset`, () => {
    const j234Wx20155Preset = j234Wx20155().build<TStandalonePriceDraft>();
    expect(j234Wx20155Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "j234-wx-2015-5",
        "recurrencePolicy": undefined,
        "sku": "j234-wx-2015",
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

  it(`should return a j234Wx20155 preset when built for graphql`, () => {
    const j234Wx20155PresetGraphql =
      j234Wx20155().buildGraphql<TStandalonePriceDraft>();
    expect(j234Wx20155PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "j234-wx-2015-5",
        "recurrencePolicy": undefined,
        "sku": "j234-wx-2015",
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
