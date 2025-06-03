import type { TStandalonePriceDraft } from '../../../types';
import yy123QrRed4 from './yy-123-qr-red-4';

describe(`with yy123QrRed4 preset`, () => {
  it(`should return a yy123QrRed4 preset`, () => {
    const yy123QrRed4Preset = yy123QrRed4().build<TStandalonePriceDraft>();
    expect(yy123QrRed4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "yy123-qr-red-4",
        "recurrencePolicy": undefined,
        "sku": "yy123-qr-red",
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

  it(`should return a yy123QrRed4 preset when built for graphql`, () => {
    const yy123QrRed4PresetGraphql =
      yy123QrRed4().buildGraphql<TStandalonePriceDraft>();
    expect(yy123QrRed4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "yy123-qr-red-4",
        "recurrencePolicy": undefined,
        "sku": "yy123-qr-red",
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
