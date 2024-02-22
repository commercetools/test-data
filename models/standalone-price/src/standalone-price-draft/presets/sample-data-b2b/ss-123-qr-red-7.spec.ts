import type { TStandalonePriceDraft } from '../../../types';
import ss123QrRed7 from './ss-123-qr-red-7';

describe(`with ss123QrRed7 preset`, () => {
  it(`should return a ss123QrRed7 preset`, () => {
    const ss123QrRed7Preset = ss123QrRed7().build<TStandalonePriceDraft>();
    expect(ss123QrRed7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ss123-qr-red-7",
        "sku": "ss123-qr-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4200000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ss123QrRed7 preset when built for graphql`, () => {
    const ss123QrRed7PresetGraphql =
      ss123QrRed7().buildGraphql<TStandalonePriceDraft>();
    expect(ss123QrRed7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ss123-qr-red-7",
        "sku": "ss123-qr-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4200000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
