import type { TStandalonePriceDraft } from '../../../types';
import yy123QrGreen8 from './yy-123-qr-green-8';

describe(`with yy123QrGreen8 preset`, () => {
  it(`should return a yy123QrGreen8 preset`, () => {
    const yy123QrGreen8Preset = yy123QrGreen8().build<TStandalonePriceDraft>();
    expect(yy123QrGreen8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "yy123-qr-green-8",
        "sku": "yy123-qr-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 6600001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a yy123QrGreen8 preset when built for graphql`, () => {
    const yy123QrGreen8PresetGraphql =
      yy123QrGreen8().buildGraphql<TStandalonePriceDraft>();
    expect(yy123QrGreen8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "yy123-qr-green-8",
        "sku": "yy123-qr-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 6600001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
