import type { TStandalonePriceDraft } from '../../../types';
import eee123QrRed3 from './eee-123-qr-red-3';

describe(`with eee123QrRed3 preset`, () => {
  it(`should return a eee123QrRed3 preset`, () => {
    const eee123QrRed3Preset = eee123QrRed3().build<TStandalonePriceDraft>();
    expect(eee123QrRed3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "eee123-qr-red-3",
        "sku": "eee123-qr-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 6600000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a eee123QrRed3 preset when built for graphql`, () => {
    const eee123QrRed3PresetGraphql =
      eee123QrRed3().buildGraphql<TStandalonePriceDraft>();
    expect(eee123QrRed3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "eee123-qr-red-3",
        "sku": "eee123-qr-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 6600000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
