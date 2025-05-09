import type { TStandalonePriceDraft } from '../../../types';
import gg123Qr20231 from './gg-123-qr-2023-1';

describe(`with gg123Qr20231 preset`, () => {
  it(`should return a gg123Qr20231 preset`, () => {
    const gg123Qr20231Preset = gg123Qr20231().build<TStandalonePriceDraft>();
    expect(gg123Qr20231Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "gg123-qr-2023-1",
        "sku": "gg123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2244000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a gg123Qr20231 preset when built for graphql`, () => {
    const gg123Qr20231PresetGraphql =
      gg123Qr20231().buildGraphql<TStandalonePriceDraft>();
    expect(gg123Qr20231PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "gg123-qr-2023-1",
        "sku": "gg123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2244000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
