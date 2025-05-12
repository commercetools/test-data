import type { TStandalonePriceDraft } from '../../../types';
import eee123QrRed8 from './eee-123-qr-red-8';

describe(`with eee123QrRed8 preset`, () => {
  it(`should return a eee123QrRed8 preset`, () => {
    const eee123QrRed8Preset = eee123QrRed8().build<TStandalonePriceDraft>();
    expect(eee123QrRed8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "eee123-qr-red-8",
        "sku": "eee123-qr-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 5500000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a eee123QrRed8 preset when built for graphql`, () => {
    const eee123QrRed8PresetGraphql =
      eee123QrRed8().buildGraphql<TStandalonePriceDraft>();
    expect(eee123QrRed8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "eee123-qr-red-8",
        "sku": "eee123-qr-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 5500000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
