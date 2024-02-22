import type { TStandalonePriceDraft } from '../../../types';
import j234Wx20235 from './j-234-wx-2023-5';

describe(`with j234Wx20235 preset`, () => {
  it(`should return a j234Wx20235 preset`, () => {
    const j234Wx20235Preset = j234Wx20235().build<TStandalonePriceDraft>();
    expect(j234Wx20235Preset).toMatchInlineSnapshot(`
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
        "key": "j234-wx-2023-5",
        "sku": "j234-wx-2023",
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

  it(`should return a j234Wx20235 preset when built for graphql`, () => {
    const j234Wx20235PresetGraphql =
      j234Wx20235().buildGraphql<TStandalonePriceDraft>();
    expect(j234Wx20235PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "j234-wx-2023-5",
        "sku": "j234-wx-2023",
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
