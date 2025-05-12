import type { TStandalonePriceDraft } from '../../../types';
import yy123QrBlue8 from './yy-123-qr-blue-8';

describe(`with yy123QrBlue8 preset`, () => {
  it(`should return a yy123QrBlue8 preset`, () => {
    const yy123QrBlue8Preset = yy123QrBlue8().build<TStandalonePriceDraft>();
    expect(yy123QrBlue8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "yy123-qr-blue-8",
        "sku": "yy123-qr-blue",
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

  it(`should return a yy123QrBlue8 preset when built for graphql`, () => {
    const yy123QrBlue8PresetGraphql =
      yy123QrBlue8().buildGraphql<TStandalonePriceDraft>();
    expect(yy123QrBlue8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "yy123-qr-blue-8",
        "sku": "yy123-qr-blue",
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
