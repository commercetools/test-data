import type { TStandalonePriceDraft } from '../../../types';
import ss123QrRed2 from './ss-123-qr-red-2';

describe(`with ss123QrRed2 preset`, () => {
  it(`should return a ss123QrRed2 preset`, () => {
    const ss123QrRed2Preset = ss123QrRed2().build<TStandalonePriceDraft>();
    expect(ss123QrRed2Preset).toMatchInlineSnapshot(`
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
        "key": "ss123-qr-red-2",
        "sku": "ss123-qr-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3465000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ss123QrRed2 preset when built for graphql`, () => {
    const ss123QrRed2PresetGraphql =
      ss123QrRed2().buildGraphql<TStandalonePriceDraft>();
    expect(ss123QrRed2PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "ss123-qr-red-2",
        "sku": "ss123-qr-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3465000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
