import type { TStandalonePriceDraft } from '../../../types';
import eee123QrBlue3 from './eee-123-qr-blue-3';

describe(`with eee123QrBlue3 preset`, () => {
  it(`should return a eee123QrBlue3 preset`, () => {
    const eee123QrBlue3Preset = eee123QrBlue3().build<TStandalonePriceDraft>();
    expect(eee123QrBlue3Preset).toMatchInlineSnapshot(`
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
        "key": "eee123-qr-blue-3",
        "sku": "eee123-qr-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 7150000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a eee123QrBlue3 preset when built for graphql`, () => {
    const eee123QrBlue3PresetGraphql =
      eee123QrBlue3().buildGraphql<TStandalonePriceDraft>();
    expect(eee123QrBlue3PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "eee123-qr-blue-3",
        "sku": "eee123-qr-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 7150000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
