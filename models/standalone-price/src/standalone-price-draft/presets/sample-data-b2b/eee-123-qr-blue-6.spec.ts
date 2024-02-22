import type { TStandalonePriceDraft } from '../../../types';
import eee123QrBlue6 from './eee-123-qr-blue-6';

describe(`with eee123QrBlue6 preset`, () => {
  it(`should return a eee123QrBlue6 preset`, () => {
    const eee123QrBlue6Preset = eee123QrBlue6().build<TStandalonePriceDraft>();
    expect(eee123QrBlue6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "eee123-qr-blue-6",
        "sku": "eee123-qr-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4000000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a eee123QrBlue6 preset when built for graphql`, () => {
    const eee123QrBlue6PresetGraphql =
      eee123QrBlue6().buildGraphql<TStandalonePriceDraft>();
    expect(eee123QrBlue6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "eee123-qr-blue-6",
        "sku": "eee123-qr-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4000000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
