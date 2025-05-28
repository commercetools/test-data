import type { TStandalonePriceDraft } from '../../../types';
import ss123QrBlue7 from './ss-123-qr-blue-7';

describe(`with ss123QrBlue7 preset`, () => {
  it(`should return a ss123QrBlue7 preset`, () => {
    const ss123QrBlue7Preset = ss123QrBlue7().build<TStandalonePriceDraft>();
    expect(ss123QrBlue7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ss123-qr-blue-7",
        "recurrencePolicy": undefined,
        "sku": "ss123-qr-blue",
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

  it(`should return a ss123QrBlue7 preset when built for graphql`, () => {
    const ss123QrBlue7PresetGraphql =
      ss123QrBlue7().buildGraphql<TStandalonePriceDraft>();
    expect(ss123QrBlue7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ss123-qr-blue-7",
        "recurrencePolicy": undefined,
        "sku": "ss123-qr-blue",
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
