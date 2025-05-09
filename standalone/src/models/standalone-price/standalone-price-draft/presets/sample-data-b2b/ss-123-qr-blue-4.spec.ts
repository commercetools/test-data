import type { TStandalonePriceDraft } from '../../../types';
import ss123QrBlue4 from './ss-123-qr-blue-4';

describe(`with ss123QrBlue4 preset`, () => {
  it(`should return a ss123QrBlue4 preset`, () => {
    const ss123QrBlue4Preset = ss123QrBlue4().build<TStandalonePriceDraft>();
    expect(ss123QrBlue4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ss123-qr-blue-4",
        "sku": "ss123-qr-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3500000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ss123QrBlue4 preset when built for graphql`, () => {
    const ss123QrBlue4PresetGraphql =
      ss123QrBlue4().buildGraphql<TStandalonePriceDraft>();
    expect(ss123QrBlue4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ss123-qr-blue-4",
        "sku": "ss123-qr-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3500000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
