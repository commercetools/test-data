import type { TStandalonePriceDraft } from '../../../types';
import yy123QrGreen5 from './yy-123-qr-green-5';

describe(`with yy123QrGreen5 preset`, () => {
  it(`should return a yy123QrGreen5 preset`, () => {
    const yy123QrGreen5Preset = yy123QrGreen5().build<TStandalonePriceDraft>();
    expect(yy123QrGreen5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "yy123-qr-green-5",
        "sku": "yy123-qr-green",
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

  it(`should return a yy123QrGreen5 preset when built for graphql`, () => {
    const yy123QrGreen5PresetGraphql =
      yy123QrGreen5().buildGraphql<TStandalonePriceDraft>();
    expect(yy123QrGreen5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "yy123-qr-green-5",
        "sku": "yy123-qr-green",
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
