import type { TStandalonePriceDraft } from '../../../types';
import ss123QrBlue3 from './ss-123-qr-blue-3';

describe(`with ss123QrBlue3 preset`, () => {
  it(`should return a ss123QrBlue3 preset`, () => {
    const ss123QrBlue3Preset = ss123QrBlue3().build<TStandalonePriceDraft>();
    expect(ss123QrBlue3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ss123-qr-blue-3",
        "sku": "ss123-qr-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 5005000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ss123QrBlue3 preset when built for graphql`, () => {
    const ss123QrBlue3PresetGraphql =
      ss123QrBlue3().buildGraphql<TStandalonePriceDraft>();
    expect(ss123QrBlue3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ss123-qr-blue-3",
        "sku": "ss123-qr-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 5005000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
