import type { TStandalonePriceDraft } from '../../../types';
import yy123QrBlue6 from './yy-123-qr-blue-6';

describe(`with yy123QrBlue6 preset`, () => {
  it(`should return a yy123QrBlue6 preset`, () => {
    const yy123QrBlue6Preset = yy123QrBlue6().build<TStandalonePriceDraft>();
    expect(yy123QrBlue6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "yy123-qr-blue-6",
        "sku": "yy123-qr-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4800000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a yy123QrBlue6 preset when built for graphql`, () => {
    const yy123QrBlue6PresetGraphql =
      yy123QrBlue6().buildGraphql<TStandalonePriceDraft>();
    expect(yy123QrBlue6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "yy123-qr-blue-6",
        "sku": "yy123-qr-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4800000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
