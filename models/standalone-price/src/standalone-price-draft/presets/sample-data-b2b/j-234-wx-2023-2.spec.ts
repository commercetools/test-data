import type { TStandalonePriceDraft } from '../../../types';
import j234Wx20232 from './j-234-wx-2023-2';

describe(`with j234Wx20232 preset`, () => {
  it(`should return a j234Wx20232 preset`, () => {
    const j234Wx20232Preset = j234Wx20232().build<TStandalonePriceDraft>();
    expect(j234Wx20232Preset).toMatchInlineSnapshot(`
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
        "key": "j234-wx-2023-2",
        "sku": "j234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1331000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a j234Wx20232 preset when built for graphql`, () => {
    const j234Wx20232PresetGraphql =
      j234Wx20232().buildGraphql<TStandalonePriceDraft>();
    expect(j234Wx20232PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "j234-wx-2023-2",
        "sku": "j234-wx-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1331000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
