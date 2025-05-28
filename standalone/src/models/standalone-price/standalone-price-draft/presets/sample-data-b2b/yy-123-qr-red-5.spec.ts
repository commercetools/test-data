import type { TStandalonePriceDraft } from '../../../types';
import yy123QrRed5 from './yy-123-qr-red-5';

describe(`with yy123QrRed5 preset`, () => {
  it(`should return a yy123QrRed5 preset`, () => {
    const yy123QrRed5Preset = yy123QrRed5().build<TStandalonePriceDraft>();
    expect(yy123QrRed5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "yy123-qr-red-5",
        "recurrencePolicy": undefined,
        "sku": "yy123-qr-red",
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

  it(`should return a yy123QrRed5 preset when built for graphql`, () => {
    const yy123QrRed5PresetGraphql =
      yy123QrRed5().buildGraphql<TStandalonePriceDraft>();
    expect(yy123QrRed5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "yy123-qr-red-5",
        "recurrencePolicy": undefined,
        "sku": "yy123-qr-red",
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
