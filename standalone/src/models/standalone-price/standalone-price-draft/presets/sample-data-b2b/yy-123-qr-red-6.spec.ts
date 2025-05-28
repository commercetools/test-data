import type { TStandalonePriceDraft } from '../../../types';
import yy123QrRed6 from './yy-123-qr-red-6';

describe(`with yy123QrRed6 preset`, () => {
  it(`should return a yy123QrRed6 preset`, () => {
    const yy123QrRed6Preset = yy123QrRed6().build<TStandalonePriceDraft>();
    expect(yy123QrRed6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "yy123-qr-red-6",
        "recurrencePolicy": undefined,
        "sku": "yy123-qr-red",
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

  it(`should return a yy123QrRed6 preset when built for graphql`, () => {
    const yy123QrRed6PresetGraphql =
      yy123QrRed6().buildGraphql<TStandalonePriceDraft>();
    expect(yy123QrRed6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "yy123-qr-red-6",
        "recurrencePolicy": undefined,
        "sku": "yy123-qr-red",
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
