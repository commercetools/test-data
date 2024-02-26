import type { TStandalonePriceDraft } from '../../../types';
import mm123Qr20233 from './mm-123-qr-2023-3';

describe(`with mm123Qr20233 preset`, () => {
  it(`should return a mm123Qr20233 preset`, () => {
    const mm123Qr20233Preset = mm123Qr20233().build<TStandalonePriceDraft>();
    expect(mm123Qr20233Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "mm123-qr-2023-3",
        "sku": "mm123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2772000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a mm123Qr20233 preset when built for graphql`, () => {
    const mm123Qr20233PresetGraphql =
      mm123Qr20233().buildGraphql<TStandalonePriceDraft>();
    expect(mm123Qr20233PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "mm123-qr-2023-3",
        "sku": "mm123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2772000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
