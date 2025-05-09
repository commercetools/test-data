import type { TStandalonePriceDraft } from '../../../types';
import eee123QrRed7 from './eee-123-qr-red-7';

describe(`with eee123QrRed7 preset`, () => {
  it(`should return a eee123QrRed7 preset`, () => {
    const eee123QrRed7Preset = eee123QrRed7().build<TStandalonePriceDraft>();
    expect(eee123QrRed7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "eee123-qr-red-7",
        "sku": "eee123-qr-red",
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

  it(`should return a eee123QrRed7 preset when built for graphql`, () => {
    const eee123QrRed7PresetGraphql =
      eee123QrRed7().buildGraphql<TStandalonePriceDraft>();
    expect(eee123QrRed7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "eee123-qr-red-7",
        "sku": "eee123-qr-red",
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
