import type { TStandalonePriceDraft } from '../../../types';
import ss123QrRed8 from './ss-123-qr-red-8';

describe(`with ss123QrRed8 preset`, () => {
  it(`should return a ss123QrRed8 preset`, () => {
    const ss123QrRed8Preset = ss123QrRed8().build<TStandalonePriceDraft>();
    expect(ss123QrRed8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ss123-qr-red-8",
        "recurrencePolicy": undefined,
        "sku": "ss123-qr-red",
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

  it(`should return a ss123QrRed8 preset when built for graphql`, () => {
    const ss123QrRed8PresetGraphql =
      ss123QrRed8().buildGraphql<TStandalonePriceDraft>();
    expect(ss123QrRed8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ss123-qr-red-8",
        "recurrencePolicy": undefined,
        "sku": "ss123-qr-red",
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
