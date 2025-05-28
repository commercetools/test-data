import type { TStandalonePriceDraft } from '../../../types';
import eee123QrRed6 from './eee-123-qr-red-6';

describe(`with eee123QrRed6 preset`, () => {
  it(`should return a eee123QrRed6 preset`, () => {
    const eee123QrRed6Preset = eee123QrRed6().build<TStandalonePriceDraft>();
    expect(eee123QrRed6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "eee123-qr-red-6",
        "recurrencePolicy": undefined,
        "sku": "eee123-qr-red",
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

  it(`should return a eee123QrRed6 preset when built for graphql`, () => {
    const eee123QrRed6PresetGraphql =
      eee123QrRed6().buildGraphql<TStandalonePriceDraft>();
    expect(eee123QrRed6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "eee123-qr-red-6",
        "recurrencePolicy": undefined,
        "sku": "eee123-qr-red",
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
