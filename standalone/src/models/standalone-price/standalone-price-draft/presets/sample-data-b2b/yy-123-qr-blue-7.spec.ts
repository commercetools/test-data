import type { TStandalonePriceDraft } from '../../../types';
import yy123QrBlue7 from './yy-123-qr-blue-7';

describe(`with yy123QrBlue7 preset`, () => {
  it(`should return a yy123QrBlue7 preset`, () => {
    const yy123QrBlue7Preset = yy123QrBlue7().build<TStandalonePriceDraft>();
    expect(yy123QrBlue7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "yy123-qr-blue-7",
        "sku": "yy123-qr-blue",
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

  it(`should return a yy123QrBlue7 preset when built for graphql`, () => {
    const yy123QrBlue7PresetGraphql =
      yy123QrBlue7().buildGraphql<TStandalonePriceDraft>();
    expect(yy123QrBlue7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "yy123-qr-blue-7",
        "sku": "yy123-qr-blue",
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
