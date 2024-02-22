import type { TStandalonePriceDraft } from '../../../types';
import yy123QrGreen1 from './yy-123-qr-green-1';

describe(`with yy123QrGreen1 preset`, () => {
  it(`should return a yy123QrGreen1 preset`, () => {
    const yy123QrGreen1Preset = yy123QrGreen1().build<TStandalonePriceDraft>();
    expect(yy123QrGreen1Preset).toMatchInlineSnapshot(`
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
        "key": "yy123-qr-green-1",
        "sku": "yy123-qr-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 7920000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a yy123QrGreen1 preset when built for graphql`, () => {
    const yy123QrGreen1PresetGraphql =
      yy123QrGreen1().buildGraphql<TStandalonePriceDraft>();
    expect(yy123QrGreen1PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "yy123-qr-green-1",
        "sku": "yy123-qr-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 7920000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
