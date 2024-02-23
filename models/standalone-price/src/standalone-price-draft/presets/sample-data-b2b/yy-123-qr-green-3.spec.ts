import type { TStandalonePriceDraft } from '../../../types';
import yy123QrGreen3 from './yy-123-qr-green-3';

describe(`with yy123QrGreen3 preset`, () => {
  it(`should return a yy123QrGreen3 preset`, () => {
    const yy123QrGreen3Preset = yy123QrGreen3().build<TStandalonePriceDraft>();
    expect(yy123QrGreen3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "yy123-qr-green-3",
        "sku": "yy123-qr-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 9240000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a yy123QrGreen3 preset when built for graphql`, () => {
    const yy123QrGreen3PresetGraphql =
      yy123QrGreen3().buildGraphql<TStandalonePriceDraft>();
    expect(yy123QrGreen3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "yy123-qr-green-3",
        "sku": "yy123-qr-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 9240000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
