import type { TStandalonePriceDraft } from '../../../types';
import ss123QrBlue5 from './ss-123-qr-blue-5';

describe(`with ss123QrBlue5 preset`, () => {
  it(`should return a ss123QrBlue5 preset`, () => {
    const ss123QrBlue5Preset = ss123QrBlue5().build<TStandalonePriceDraft>();
    expect(ss123QrBlue5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ss123-qr-blue-5",
        "sku": "ss123-qr-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3150000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ss123QrBlue5 preset when built for graphql`, () => {
    const ss123QrBlue5PresetGraphql =
      ss123QrBlue5().buildGraphql<TStandalonePriceDraft>();
    expect(ss123QrBlue5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ss123-qr-blue-5",
        "sku": "ss123-qr-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3150000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
