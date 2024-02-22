import type { TStandalonePriceDraft } from '../../../types';
import ss123QrGreen2 from './ss-123-qr-green-2';

describe(`with ss123QrGreen2 preset`, () => {
  it(`should return a ss123QrGreen2 preset`, () => {
    const ss123QrGreen2Preset = ss123QrGreen2().build<TStandalonePriceDraft>();
    expect(ss123QrGreen2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ss123-qr-green-2",
        "sku": "ss123-qr-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4235001,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ss123QrGreen2 preset when built for graphql`, () => {
    const ss123QrGreen2PresetGraphql =
      ss123QrGreen2().buildGraphql<TStandalonePriceDraft>();
    expect(ss123QrGreen2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ss123-qr-green-2",
        "sku": "ss123-qr-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4235001,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
