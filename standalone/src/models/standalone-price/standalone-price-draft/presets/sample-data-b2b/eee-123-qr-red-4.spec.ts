import type { TStandalonePriceDraft } from '../../../types';
import eee123QrRed4 from './eee-123-qr-red-4';

describe(`with eee123QrRed4 preset`, () => {
  it(`should return a eee123QrRed4 preset`, () => {
    const eee123QrRed4Preset = eee123QrRed4().build<TStandalonePriceDraft>();
    expect(eee123QrRed4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "eee123-qr-red-4",
        "sku": "eee123-qr-red",
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

  it(`should return a eee123QrRed4 preset when built for graphql`, () => {
    const eee123QrRed4PresetGraphql =
      eee123QrRed4().buildGraphql<TStandalonePriceDraft>();
    expect(eee123QrRed4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "eee123-qr-red-4",
        "sku": "eee123-qr-red",
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
