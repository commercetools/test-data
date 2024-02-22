import type { TStandalonePriceDraft } from '../../../types';
import gg123Qr20235 from './gg-123-qr-2023-5';

describe(`with gg123Qr20235 preset`, () => {
  it(`should return a gg123Qr20235 preset`, () => {
    const gg123Qr20235Preset = gg123Qr20235().build<TStandalonePriceDraft>();
    expect(gg123Qr20235Preset).toMatchInlineSnapshot(`
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
        "key": "gg123-qr-2023-5",
        "sku": "gg123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1530000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a gg123Qr20235 preset when built for graphql`, () => {
    const gg123Qr20235PresetGraphql =
      gg123Qr20235().buildGraphql<TStandalonePriceDraft>();
    expect(gg123Qr20235PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "gg123-qr-2023-5",
        "sku": "gg123-qr-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1530000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
