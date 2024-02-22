import type { TStandalonePriceDraft } from '../../../types';
import yy123QrRed1 from './yy-123-qr-red-1';

describe(`with yy123QrRed1 preset`, () => {
  it(`should return a yy123QrRed1 preset`, () => {
    const yy123QrRed1Preset = yy123QrRed1().build<TStandalonePriceDraft>();
    expect(yy123QrRed1Preset).toMatchInlineSnapshot(`
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
        "key": "yy123-qr-red-1",
        "sku": "yy123-qr-red",
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

  it(`should return a yy123QrRed1 preset when built for graphql`, () => {
    const yy123QrRed1PresetGraphql =
      yy123QrRed1().buildGraphql<TStandalonePriceDraft>();
    expect(yy123QrRed1PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "yy123-qr-red-1",
        "sku": "yy123-qr-red",
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
