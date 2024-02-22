import type { TStandalonePriceDraft } from '../../../types';
import eee123QrRed2 from './eee-123-qr-red-2';

describe(`with eee123QrRed2 preset`, () => {
  it(`should return a eee123QrRed2 preset`, () => {
    const eee123QrRed2Preset = eee123QrRed2().build<TStandalonePriceDraft>();
    expect(eee123QrRed2Preset).toMatchInlineSnapshot(`
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
        "key": "eee123-qr-red-2",
        "sku": "eee123-qr-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4950000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a eee123QrRed2 preset when built for graphql`, () => {
    const eee123QrRed2PresetGraphql =
      eee123QrRed2().buildGraphql<TStandalonePriceDraft>();
    expect(eee123QrRed2PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "eee123-qr-red-2",
        "sku": "eee123-qr-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4950000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
