import type { TStandalonePriceDraft } from '../../../types';
import eee123QrBlue1 from './eee-123-qr-blue-1';

describe(`with eee123QrBlue1 preset`, () => {
  it(`should return a eee123QrBlue1 preset`, () => {
    const eee123QrBlue1Preset = eee123QrBlue1().build<TStandalonePriceDraft>();
    expect(eee123QrBlue1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "eee123-qr-blue-1",
        "recurrencePolicy": undefined,
        "sku": "eee123-qr-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 6050000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a eee123QrBlue1 preset when built for graphql`, () => {
    const eee123QrBlue1PresetGraphql =
      eee123QrBlue1().buildGraphql<TStandalonePriceDraft>();
    expect(eee123QrBlue1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "eee123-qr-blue-1",
        "recurrencePolicy": undefined,
        "sku": "eee123-qr-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 6050000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
