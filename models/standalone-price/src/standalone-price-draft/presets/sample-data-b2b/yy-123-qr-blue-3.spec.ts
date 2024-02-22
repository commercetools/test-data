import type { TStandalonePriceDraft } from '../../../types';
import yy123QrBlue3 from './yy-123-qr-blue-3';

describe(`with yy123QrBlue3 preset`, () => {
  it(`should return a yy123QrBlue3 preset`, () => {
    const yy123QrBlue3Preset = yy123QrBlue3().build<TStandalonePriceDraft>();
    expect(yy123QrBlue3Preset).toMatchInlineSnapshot(`
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
        "key": "yy123-qr-blue-3",
        "sku": "yy123-qr-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 8580000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a yy123QrBlue3 preset when built for graphql`, () => {
    const yy123QrBlue3PresetGraphql =
      yy123QrBlue3().buildGraphql<TStandalonePriceDraft>();
    expect(yy123QrBlue3PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "yy123-qr-blue-3",
        "sku": "yy123-qr-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 8580000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
