import type { TStandalonePriceDraft } from '../../../types';
import eee123QrGreen2 from './eee-123-qr-green-2';

describe(`with eee123QrGreen2 preset`, () => {
  it(`should return a eee123QrGreen2 preset`, () => {
    const eee123QrGreen2Preset =
      eee123QrGreen2().build<TStandalonePriceDraft>();
    expect(eee123QrGreen2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "eee123-qr-green-2",
        "recurrencePolicy": undefined,
        "sku": "eee123-qr-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 6050000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a eee123QrGreen2 preset when built for graphql`, () => {
    const eee123QrGreen2PresetGraphql =
      eee123QrGreen2().buildGraphql<TStandalonePriceDraft>();
    expect(eee123QrGreen2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "eee123-qr-green-2",
        "recurrencePolicy": undefined,
        "sku": "eee123-qr-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 6050000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
