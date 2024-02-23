import type { TStandalonePriceDraft } from '../../../types';
import eee123QrBlue8 from './eee-123-qr-blue-8';

describe(`with eee123QrBlue8 preset`, () => {
  it(`should return a eee123QrBlue8 preset`, () => {
    const eee123QrBlue8Preset = eee123QrBlue8().build<TStandalonePriceDraft>();
    expect(eee123QrBlue8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "eee123-qr-blue-8",
        "sku": "eee123-qr-blue",
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

  it(`should return a eee123QrBlue8 preset when built for graphql`, () => {
    const eee123QrBlue8PresetGraphql =
      eee123QrBlue8().buildGraphql<TStandalonePriceDraft>();
    expect(eee123QrBlue8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "eee123-qr-blue-8",
        "sku": "eee123-qr-blue",
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
