import type { TStandalonePriceDraft } from '../../../types';
import eee123QrBlue5 from './eee-123-qr-blue-5';

describe(`with eee123QrBlue5 preset`, () => {
  it(`should return a eee123QrBlue5 preset`, () => {
    const eee123QrBlue5Preset = eee123QrBlue5().build<TStandalonePriceDraft>();
    expect(eee123QrBlue5Preset).toMatchInlineSnapshot(`
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
        "key": "eee123-qr-blue-5",
        "sku": "eee123-qr-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4500000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a eee123QrBlue5 preset when built for graphql`, () => {
    const eee123QrBlue5PresetGraphql =
      eee123QrBlue5().buildGraphql<TStandalonePriceDraft>();
    expect(eee123QrBlue5PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "eee123-qr-blue-5",
        "sku": "eee123-qr-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4500000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
