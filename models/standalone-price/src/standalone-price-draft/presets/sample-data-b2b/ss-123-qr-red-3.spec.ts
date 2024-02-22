import type { TStandalonePriceDraft } from '../../../types';
import ss123QrRed3 from './ss-123-qr-red-3';

describe(`with ss123QrRed3 preset`, () => {
  it(`should return a ss123QrRed3 preset`, () => {
    const ss123QrRed3Preset = ss123QrRed3().build<TStandalonePriceDraft>();
    expect(ss123QrRed3Preset).toMatchInlineSnapshot(`
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
        "key": "ss123-qr-red-3",
        "sku": "ss123-qr-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4620000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ss123QrRed3 preset when built for graphql`, () => {
    const ss123QrRed3PresetGraphql =
      ss123QrRed3().buildGraphql<TStandalonePriceDraft>();
    expect(ss123QrRed3PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "ss123-qr-red-3",
        "sku": "ss123-qr-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4620000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
