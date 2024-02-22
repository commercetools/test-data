import type { TStandalonePriceDraft } from '../../../types';
import yy123QrBlue2 from './yy-123-qr-blue-2';

describe(`with yy123QrBlue2 preset`, () => {
  it(`should return a yy123QrBlue2 preset`, () => {
    const yy123QrBlue2Preset = yy123QrBlue2().build<TStandalonePriceDraft>();
    expect(yy123QrBlue2Preset).toMatchInlineSnapshot(`
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
        "key": "yy123-qr-blue-2",
        "sku": "yy123-qr-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 6600000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a yy123QrBlue2 preset when built for graphql`, () => {
    const yy123QrBlue2PresetGraphql =
      yy123QrBlue2().buildGraphql<TStandalonePriceDraft>();
    expect(yy123QrBlue2PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "yy123-qr-blue-2",
        "sku": "yy123-qr-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 6600000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
