import type { TStandalonePriceDraft } from '../../../types';
import j234Wx20152 from './j-234-wx-2015-2';

describe(`with j234Wx20152 preset`, () => {
  it(`should return a j234Wx20152 preset`, () => {
    const j234Wx20152Preset = j234Wx20152().build<TStandalonePriceDraft>();
    expect(j234Wx20152Preset).toMatchInlineSnapshot(`
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
        "key": "j234-wx-2015-2",
        "sku": "j234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1089000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a j234Wx20152 preset when built for graphql`, () => {
    const j234Wx20152PresetGraphql =
      j234Wx20152().buildGraphql<TStandalonePriceDraft>();
    expect(j234Wx20152PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "j234-wx-2015-2",
        "sku": "j234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1089000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
