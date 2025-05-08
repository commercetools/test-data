import type { TStandalonePriceDraft } from '../../../types';
import ss123QrGreen7 from './ss-123-qr-green-7';

describe(`with ss123QrGreen7 preset`, () => {
  it(`should return a ss123QrGreen7 preset`, () => {
    const ss123QrGreen7Preset = ss123QrGreen7().build<TStandalonePriceDraft>();
    expect(ss123QrGreen7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ss123-qr-green-7",
        "sku": "ss123-qr-green",
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

  it(`should return a ss123QrGreen7 preset when built for graphql`, () => {
    const ss123QrGreen7PresetGraphql =
      ss123QrGreen7().buildGraphql<TStandalonePriceDraft>();
    expect(ss123QrGreen7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ss123-qr-green-7",
        "sku": "ss123-qr-green",
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
