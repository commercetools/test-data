import type { TStandalonePriceDraft } from '../../../types';
import j234Wx20156 from './j-234-wx-2015-6';

describe(`with j234Wx20156 preset`, () => {
  it(`should return a j234Wx20156 preset`, () => {
    const j234Wx20156Preset = j234Wx20156().build<TStandalonePriceDraft>();
    expect(j234Wx20156Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "j234-wx-2015-6",
        "sku": "j234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 880000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a j234Wx20156 preset when built for graphql`, () => {
    const j234Wx20156PresetGraphql =
      j234Wx20156().buildGraphql<TStandalonePriceDraft>();
    expect(j234Wx20156PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "j234-wx-2015-6",
        "sku": "j234-wx-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 880000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
