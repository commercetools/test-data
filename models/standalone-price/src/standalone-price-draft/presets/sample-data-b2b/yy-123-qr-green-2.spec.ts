import type { TStandalonePriceDraft } from '../../../types';
import yy123QrGreen2 from './yy-123-qr-green-2';

describe(`with yy123QrGreen2 preset`, () => {
  it(`should return a yy123QrGreen2 preset`, () => {
    const yy123QrGreen2Preset = yy123QrGreen2().build<TStandalonePriceDraft>();
    expect(yy123QrGreen2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "yy123-qr-green-2",
        "sku": "yy123-qr-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 7260001,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a yy123QrGreen2 preset when built for graphql`, () => {
    const yy123QrGreen2PresetGraphql =
      yy123QrGreen2().buildGraphql<TStandalonePriceDraft>();
    expect(yy123QrGreen2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "yy123-qr-green-2",
        "sku": "yy123-qr-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 7260001,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
