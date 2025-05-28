import type { TStandalonePriceDraft } from '../../../types';
import eee123QrGreen8 from './eee-123-qr-green-8';

describe(`with eee123QrGreen8 preset`, () => {
  it(`should return a eee123QrGreen8 preset`, () => {
    const eee123QrGreen8Preset =
      eee123QrGreen8().build<TStandalonePriceDraft>();
    expect(eee123QrGreen8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "eee123-qr-green-8",
        "recurrencePolicy": undefined,
        "sku": "eee123-qr-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 5500000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a eee123QrGreen8 preset when built for graphql`, () => {
    const eee123QrGreen8PresetGraphql =
      eee123QrGreen8().buildGraphql<TStandalonePriceDraft>();
    expect(eee123QrGreen8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "eee123-qr-green-8",
        "recurrencePolicy": undefined,
        "sku": "eee123-qr-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 5500000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
