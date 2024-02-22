import type { TStandalonePriceDraft } from '../../../types';
import yy123QrGreen7 from './yy-123-qr-green-7';

describe(`with yy123QrGreen7 preset`, () => {
  it(`should return a yy123QrGreen7 preset`, () => {
    const yy123QrGreen7Preset = yy123QrGreen7().build<TStandalonePriceDraft>();
    expect(yy123QrGreen7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "yy123-qr-green-7",
        "sku": "yy123-qr-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 7200000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a yy123QrGreen7 preset when built for graphql`, () => {
    const yy123QrGreen7PresetGraphql =
      yy123QrGreen7().buildGraphql<TStandalonePriceDraft>();
    expect(yy123QrGreen7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "yy123-qr-green-7",
        "sku": "yy123-qr-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 7200000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
