import type { TStandalonePriceDraft } from '../../../types';
import yy123QrBlue1 from './yy-123-qr-blue-1';

describe(`with yy123QrBlue1 preset`, () => {
  it(`should return a yy123QrBlue1 preset`, () => {
    const yy123QrBlue1Preset = yy123QrBlue1().build<TStandalonePriceDraft>();
    expect(yy123QrBlue1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "yy123-qr-blue-1",
        "sku": "yy123-qr-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 7260001,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a yy123QrBlue1 preset when built for graphql`, () => {
    const yy123QrBlue1PresetGraphql =
      yy123QrBlue1().buildGraphql<TStandalonePriceDraft>();
    expect(yy123QrBlue1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "yy123-qr-blue-1",
        "sku": "yy123-qr-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 7260001,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
