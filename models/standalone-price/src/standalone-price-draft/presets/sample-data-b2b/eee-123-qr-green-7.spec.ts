import type { TStandalonePriceDraft } from '../../../types';
import eee123QrGreen7 from './eee-123-qr-green-7';

describe(`with eee123QrGreen7 preset`, () => {
  it(`should return a eee123QrGreen7 preset`, () => {
    const eee123QrGreen7Preset =
      eee123QrGreen7().build<TStandalonePriceDraft>();
    expect(eee123QrGreen7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "eee123-qr-green-7",
        "sku": "eee123-qr-green",
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

  it(`should return a eee123QrGreen7 preset when built for graphql`, () => {
    const eee123QrGreen7PresetGraphql =
      eee123QrGreen7().buildGraphql<TStandalonePriceDraft>();
    expect(eee123QrGreen7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "eee123-qr-green-7",
        "sku": "eee123-qr-green",
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
