import type { TStandalonePriceDraft } from '../../../types';
import eee123QrRed1 from './eee-123-qr-red-1';

describe(`with eee123QrRed1 preset`, () => {
  it(`should return a eee123QrRed1 preset`, () => {
    const eee123QrRed1Preset = eee123QrRed1().build<TStandalonePriceDraft>();
    expect(eee123QrRed1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "eee123-qr-red-1",
        "recurrencePolicy": undefined,
        "sku": "eee123-qr-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 5500000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a eee123QrRed1 preset when built for graphql`, () => {
    const eee123QrRed1PresetGraphql =
      eee123QrRed1().buildGraphql<TStandalonePriceDraft>();
    expect(eee123QrRed1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "eee123-qr-red-1",
        "recurrencePolicy": undefined,
        "sku": "eee123-qr-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 5500000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
