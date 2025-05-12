import type { TStandalonePriceDraft } from '../../../types';
import mm123Qr20232 from './mm-123-qr-2023-2';

describe(`with mm123Qr20232 preset`, () => {
  it(`should return a mm123Qr20232 preset`, () => {
    const mm123Qr20232Preset = mm123Qr20232().build<TStandalonePriceDraft>();
    expect(mm123Qr20232Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "mm123-qr-2023-2",
        "sku": "mm123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2178001,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a mm123Qr20232 preset when built for graphql`, () => {
    const mm123Qr20232PresetGraphql =
      mm123Qr20232().buildGraphql<TStandalonePriceDraft>();
    expect(mm123Qr20232PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "mm123-qr-2023-2",
        "sku": "mm123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2178001,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
