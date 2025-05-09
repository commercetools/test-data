import type { TStandalonePriceDraft } from '../../../types';
import ss123QrBlue2 from './ss-123-qr-blue-2';

describe(`with ss123QrBlue2 preset`, () => {
  it(`should return a ss123QrBlue2 preset`, () => {
    const ss123QrBlue2Preset = ss123QrBlue2().build<TStandalonePriceDraft>();
    expect(ss123QrBlue2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ss123-qr-blue-2",
        "sku": "ss123-qr-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3850000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ss123QrBlue2 preset when built for graphql`, () => {
    const ss123QrBlue2PresetGraphql =
      ss123QrBlue2().buildGraphql<TStandalonePriceDraft>();
    expect(ss123QrBlue2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ss123-qr-blue-2",
        "sku": "ss123-qr-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3850000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
