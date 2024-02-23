import type { TStandalonePriceDraft } from '../../../types';
import eee123QrRed5 from './eee-123-qr-red-5';

describe(`with eee123QrRed5 preset`, () => {
  it(`should return a eee123QrRed5 preset`, () => {
    const eee123QrRed5Preset = eee123QrRed5().build<TStandalonePriceDraft>();
    expect(eee123QrRed5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "eee123-qr-red-5",
        "sku": "eee123-qr-red",
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

  it(`should return a eee123QrRed5 preset when built for graphql`, () => {
    const eee123QrRed5PresetGraphql =
      eee123QrRed5().buildGraphql<TStandalonePriceDraft>();
    expect(eee123QrRed5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "eee123-qr-red-5",
        "sku": "eee123-qr-red",
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
