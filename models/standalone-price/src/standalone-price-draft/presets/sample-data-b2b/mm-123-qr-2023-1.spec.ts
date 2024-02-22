import type { TStandalonePriceDraft } from '../../../types';
import mm123Qr20231 from './mm-123-qr-2023-1';

describe(`with mm123Qr20231 preset`, () => {
  it(`should return a mm123Qr20231 preset`, () => {
    const mm123Qr20231Preset = mm123Qr20231().build<TStandalonePriceDraft>();
    expect(mm123Qr20231Preset).toMatchInlineSnapshot(`
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
        "key": "mm123-qr-2023-1",
        "sku": "mm123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2376000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a mm123Qr20231 preset when built for graphql`, () => {
    const mm123Qr20231PresetGraphql =
      mm123Qr20231().buildGraphql<TStandalonePriceDraft>();
    expect(mm123Qr20231PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "mm123-qr-2023-1",
        "sku": "mm123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2376000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
