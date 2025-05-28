import type { TStandalonePriceDraft } from '../../../types';
import eee123QrGreen6 from './eee-123-qr-green-6';

describe(`with eee123QrGreen6 preset`, () => {
  it(`should return a eee123QrGreen6 preset`, () => {
    const eee123QrGreen6Preset =
      eee123QrGreen6().build<TStandalonePriceDraft>();
    expect(eee123QrGreen6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "eee123-qr-green-6",
        "recurrencePolicy": undefined,
        "sku": "eee123-qr-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4000000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a eee123QrGreen6 preset when built for graphql`, () => {
    const eee123QrGreen6PresetGraphql =
      eee123QrGreen6().buildGraphql<TStandalonePriceDraft>();
    expect(eee123QrGreen6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "eee123-qr-green-6",
        "recurrencePolicy": undefined,
        "sku": "eee123-qr-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4000000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
