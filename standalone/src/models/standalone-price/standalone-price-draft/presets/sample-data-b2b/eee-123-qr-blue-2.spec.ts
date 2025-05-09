import type { TStandalonePriceDraft } from '../../../types';
import eee123QrBlue2 from './eee-123-qr-blue-2';

describe(`with eee123QrBlue2 preset`, () => {
  it(`should return a eee123QrBlue2 preset`, () => {
    const eee123QrBlue2Preset = eee123QrBlue2().build<TStandalonePriceDraft>();
    expect(eee123QrBlue2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "eee123-qr-blue-2",
        "sku": "eee123-qr-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 5500000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a eee123QrBlue2 preset when built for graphql`, () => {
    const eee123QrBlue2PresetGraphql =
      eee123QrBlue2().buildGraphql<TStandalonePriceDraft>();
    expect(eee123QrBlue2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "eee123-qr-blue-2",
        "sku": "eee123-qr-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 5500000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
