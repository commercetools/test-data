import type { TStandalonePriceDraft } from '../../../types';
import eee123QrGreen5 from './eee-123-qr-green-5';

describe(`with eee123QrGreen5 preset`, () => {
  it(`should return a eee123QrGreen5 preset`, () => {
    const eee123QrGreen5Preset =
      eee123QrGreen5().build<TStandalonePriceDraft>();
    expect(eee123QrGreen5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "eee123-qr-green-5",
        "sku": "eee123-qr-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4500000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a eee123QrGreen5 preset when built for graphql`, () => {
    const eee123QrGreen5PresetGraphql =
      eee123QrGreen5().buildGraphql<TStandalonePriceDraft>();
    expect(eee123QrGreen5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "eee123-qr-green-5",
        "sku": "eee123-qr-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4500000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
