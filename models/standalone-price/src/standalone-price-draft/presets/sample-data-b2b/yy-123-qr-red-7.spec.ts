import type { TStandalonePriceDraft } from '../../../types';
import yy123QrRed7 from './yy-123-qr-red-7';

describe(`with yy123QrRed7 preset`, () => {
  it(`should return a yy123QrRed7 preset`, () => {
    const yy123QrRed7Preset = yy123QrRed7().build<TStandalonePriceDraft>();
    expect(yy123QrRed7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "yy123-qr-red-7",
        "sku": "yy123-qr-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 7200000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a yy123QrRed7 preset when built for graphql`, () => {
    const yy123QrRed7PresetGraphql =
      yy123QrRed7().buildGraphql<TStandalonePriceDraft>();
    expect(yy123QrRed7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "yy123-qr-red-7",
        "sku": "yy123-qr-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 7200000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
