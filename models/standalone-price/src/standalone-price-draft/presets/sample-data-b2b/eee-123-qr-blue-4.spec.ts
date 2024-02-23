import type { TStandalonePriceDraft } from '../../../types';
import eee123QrBlue4 from './eee-123-qr-blue-4';

describe(`with eee123QrBlue4 preset`, () => {
  it(`should return a eee123QrBlue4 preset`, () => {
    const eee123QrBlue4Preset = eee123QrBlue4().build<TStandalonePriceDraft>();
    expect(eee123QrBlue4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "eee123-qr-blue-4",
        "sku": "eee123-qr-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 5000000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a eee123QrBlue4 preset when built for graphql`, () => {
    const eee123QrBlue4PresetGraphql =
      eee123QrBlue4().buildGraphql<TStandalonePriceDraft>();
    expect(eee123QrBlue4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "eee123-qr-blue-4",
        "sku": "eee123-qr-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 5000000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
