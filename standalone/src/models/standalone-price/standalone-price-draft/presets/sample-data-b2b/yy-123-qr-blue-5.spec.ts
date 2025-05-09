import type { TStandalonePriceDraft } from '../../../types';
import yy123QrBlue5 from './yy-123-qr-blue-5';

describe(`with yy123QrBlue5 preset`, () => {
  it(`should return a yy123QrBlue5 preset`, () => {
    const yy123QrBlue5Preset = yy123QrBlue5().build<TStandalonePriceDraft>();
    expect(yy123QrBlue5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "yy123-qr-blue-5",
        "sku": "yy123-qr-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 5400000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a yy123QrBlue5 preset when built for graphql`, () => {
    const yy123QrBlue5PresetGraphql =
      yy123QrBlue5().buildGraphql<TStandalonePriceDraft>();
    expect(yy123QrBlue5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "yy123-qr-blue-5",
        "sku": "yy123-qr-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 5400000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
