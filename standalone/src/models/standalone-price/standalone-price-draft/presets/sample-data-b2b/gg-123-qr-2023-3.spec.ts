import type { TStandalonePriceDraft } from '../../../types';
import gg123Qr20233 from './gg-123-qr-2023-3';

describe(`with gg123Qr20233 preset`, () => {
  it(`should return a gg123Qr20233 preset`, () => {
    const gg123Qr20233Preset = gg123Qr20233().build<TStandalonePriceDraft>();
    expect(gg123Qr20233Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "gg123-qr-2023-3",
        "sku": "gg123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2618000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a gg123Qr20233 preset when built for graphql`, () => {
    const gg123Qr20233PresetGraphql =
      gg123Qr20233().buildGraphql<TStandalonePriceDraft>();
    expect(gg123Qr20233PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "gg123-qr-2023-3",
        "sku": "gg123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2618000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
