import type { TStandalonePriceDraft } from '../../../types';
import yy123QrRed2 from './yy-123-qr-red-2';

describe(`with yy123QrRed2 preset`, () => {
  it(`should return a yy123QrRed2 preset`, () => {
    const yy123QrRed2Preset = yy123QrRed2().build<TStandalonePriceDraft>();
    expect(yy123QrRed2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "yy123-qr-red-2",
        "recurrencePolicy": undefined,
        "sku": "yy123-qr-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 5940000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a yy123QrRed2 preset when built for graphql`, () => {
    const yy123QrRed2PresetGraphql =
      yy123QrRed2().buildGraphql<TStandalonePriceDraft>();
    expect(yy123QrRed2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "yy123-qr-red-2",
        "recurrencePolicy": undefined,
        "sku": "yy123-qr-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 5940000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
