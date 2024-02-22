import type { TStandalonePriceDraft } from '../../../types';
import ss123QrBlue8 from './ss-123-qr-blue-8';

describe(`with ss123QrBlue8 preset`, () => {
  it(`should return a ss123QrBlue8 preset`, () => {
    const ss123QrBlue8Preset = ss123QrBlue8().build<TStandalonePriceDraft>();
    expect(ss123QrBlue8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ss123-qr-blue-8",
        "sku": "ss123-qr-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3850001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ss123QrBlue8 preset when built for graphql`, () => {
    const ss123QrBlue8PresetGraphql =
      ss123QrBlue8().buildGraphql<TStandalonePriceDraft>();
    expect(ss123QrBlue8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ss123-qr-blue-8",
        "sku": "ss123-qr-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3850001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
