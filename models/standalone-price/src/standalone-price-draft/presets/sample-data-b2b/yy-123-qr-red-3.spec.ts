import type { TStandalonePriceDraft } from '../../../types';
import yy123QrRed3 from './yy-123-qr-red-3';

describe(`with yy123QrRed3 preset`, () => {
  it(`should return a yy123QrRed3 preset`, () => {
    const yy123QrRed3Preset = yy123QrRed3().build<TStandalonePriceDraft>();
    expect(yy123QrRed3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "yy123-qr-red-3",
        "sku": "yy123-qr-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 7920000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a yy123QrRed3 preset when built for graphql`, () => {
    const yy123QrRed3PresetGraphql =
      yy123QrRed3().buildGraphql<TStandalonePriceDraft>();
    expect(yy123QrRed3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "yy123-qr-red-3",
        "sku": "yy123-qr-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 7920000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
