import type { TStandalonePriceDraft } from '../../../types';
import yy123QrGreen4 from './yy-123-qr-green-4';

describe(`with yy123QrGreen4 preset`, () => {
  it(`should return a yy123QrGreen4 preset`, () => {
    const yy123QrGreen4Preset = yy123QrGreen4().build<TStandalonePriceDraft>();
    expect(yy123QrGreen4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "yy123-qr-green-4",
        "sku": "yy123-qr-green",
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

  it(`should return a yy123QrGreen4 preset when built for graphql`, () => {
    const yy123QrGreen4PresetGraphql =
      yy123QrGreen4().buildGraphql<TStandalonePriceDraft>();
    expect(yy123QrGreen4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "yy123-qr-green-4",
        "sku": "yy123-qr-green",
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
