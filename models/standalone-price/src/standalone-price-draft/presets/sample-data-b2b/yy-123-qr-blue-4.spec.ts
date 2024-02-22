import type { TStandalonePriceDraft } from '../../../types';
import yy123QrBlue4 from './yy-123-qr-blue-4';

describe(`with yy123QrBlue4 preset`, () => {
  it(`should return a yy123QrBlue4 preset`, () => {
    const yy123QrBlue4Preset = yy123QrBlue4().build<TStandalonePriceDraft>();
    expect(yy123QrBlue4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "yy123-qr-blue-4",
        "sku": "yy123-qr-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 6000000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a yy123QrBlue4 preset when built for graphql`, () => {
    const yy123QrBlue4PresetGraphql =
      yy123QrBlue4().buildGraphql<TStandalonePriceDraft>();
    expect(yy123QrBlue4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "yy123-qr-blue-4",
        "sku": "yy123-qr-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 6000000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
