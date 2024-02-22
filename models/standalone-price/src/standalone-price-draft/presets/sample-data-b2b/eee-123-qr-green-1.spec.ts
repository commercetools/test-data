import type { TStandalonePriceDraft } from '../../../types';
import eee123QrGreen1 from './eee-123-qr-green-1';

describe(`with eee123QrGreen1 preset`, () => {
  it(`should return a eee123QrGreen1 preset`, () => {
    const eee123QrGreen1Preset =
      eee123QrGreen1().build<TStandalonePriceDraft>();
    expect(eee123QrGreen1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "eee123-qr-green-1",
        "sku": "eee123-qr-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 6600000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a eee123QrGreen1 preset when built for graphql`, () => {
    const eee123QrGreen1PresetGraphql =
      eee123QrGreen1().buildGraphql<TStandalonePriceDraft>();
    expect(eee123QrGreen1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "eee123-qr-green-1",
        "sku": "eee123-qr-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 6600000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
