import type { TStandalonePriceDraft } from '../../../types';
import yy123QrRed8 from './yy-123-qr-red-8';

describe(`with yy123QrRed8 preset`, () => {
  it(`should return a yy123QrRed8 preset`, () => {
    const yy123QrRed8Preset = yy123QrRed8().build<TStandalonePriceDraft>();
    expect(yy123QrRed8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "yy123-qr-red-8",
        "sku": "yy123-qr-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 6600001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a yy123QrRed8 preset when built for graphql`, () => {
    const yy123QrRed8PresetGraphql =
      yy123QrRed8().buildGraphql<TStandalonePriceDraft>();
    expect(yy123QrRed8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "yy123-qr-red-8",
        "sku": "yy123-qr-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 6600001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
