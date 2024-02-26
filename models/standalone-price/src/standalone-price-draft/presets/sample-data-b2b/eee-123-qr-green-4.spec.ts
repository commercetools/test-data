import type { TStandalonePriceDraft } from '../../../types';
import eee123QrGreen4 from './eee-123-qr-green-4';

describe(`with eee123QrGreen4 preset`, () => {
  it(`should return a eee123QrGreen4 preset`, () => {
    const eee123QrGreen4Preset =
      eee123QrGreen4().build<TStandalonePriceDraft>();
    expect(eee123QrGreen4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "eee123-qr-green-4",
        "sku": "eee123-qr-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 5000000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a eee123QrGreen4 preset when built for graphql`, () => {
    const eee123QrGreen4PresetGraphql =
      eee123QrGreen4().buildGraphql<TStandalonePriceDraft>();
    expect(eee123QrGreen4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "eee123-qr-green-4",
        "sku": "eee123-qr-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 5000000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
