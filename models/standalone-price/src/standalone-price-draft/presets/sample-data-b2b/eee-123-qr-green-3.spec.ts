import type { TStandalonePriceDraft } from '../../../types';
import eee123QrGreen3 from './eee-123-qr-green-3';

describe(`with eee123QrGreen3 preset`, () => {
  it(`should return a eee123QrGreen3 preset`, () => {
    const eee123QrGreen3Preset =
      eee123QrGreen3().build<TStandalonePriceDraft>();
    expect(eee123QrGreen3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "eee123-qr-green-3",
        "sku": "eee123-qr-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 7700000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a eee123QrGreen3 preset when built for graphql`, () => {
    const eee123QrGreen3PresetGraphql =
      eee123QrGreen3().buildGraphql<TStandalonePriceDraft>();
    expect(eee123QrGreen3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "eee123-qr-green-3",
        "sku": "eee123-qr-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 7700000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
