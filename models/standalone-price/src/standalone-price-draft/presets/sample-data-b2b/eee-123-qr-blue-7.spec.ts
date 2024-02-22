import type { TStandalonePriceDraft } from '../../../types';
import eee123QrBlue7 from './eee-123-qr-blue-7';

describe(`with eee123QrBlue7 preset`, () => {
  it(`should return a eee123QrBlue7 preset`, () => {
    const eee123QrBlue7Preset = eee123QrBlue7().build<TStandalonePriceDraft>();
    expect(eee123QrBlue7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "eee123-qr-blue-7",
        "sku": "eee123-qr-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 6000000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a eee123QrBlue7 preset when built for graphql`, () => {
    const eee123QrBlue7PresetGraphql =
      eee123QrBlue7().buildGraphql<TStandalonePriceDraft>();
    expect(eee123QrBlue7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "eee123-qr-blue-7",
        "sku": "eee123-qr-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 6000000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
