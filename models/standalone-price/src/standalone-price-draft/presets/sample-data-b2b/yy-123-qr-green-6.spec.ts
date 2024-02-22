import type { TStandalonePriceDraft } from '../../../types';
import yy123QrGreen6 from './yy-123-qr-green-6';

describe(`with yy123QrGreen6 preset`, () => {
  it(`should return a yy123QrGreen6 preset`, () => {
    const yy123QrGreen6Preset = yy123QrGreen6().build<TStandalonePriceDraft>();
    expect(yy123QrGreen6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "yy123-qr-green-6",
        "sku": "yy123-qr-green",
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

  it(`should return a yy123QrGreen6 preset when built for graphql`, () => {
    const yy123QrGreen6PresetGraphql =
      yy123QrGreen6().buildGraphql<TStandalonePriceDraft>();
    expect(yy123QrGreen6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "yy123-qr-green-6",
        "sku": "yy123-qr-green",
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
