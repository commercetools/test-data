import type { TStandalonePriceDraft } from '../../../types';
import ss123QrRed1 from './ss-123-qr-red-1';

describe(`with ss123QrRed1 preset`, () => {
  it(`should return a ss123QrRed1 preset`, () => {
    const ss123QrRed1Preset = ss123QrRed1().build<TStandalonePriceDraft>();
    expect(ss123QrRed1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ss123-qr-red-1",
        "recurrencePolicy": undefined,
        "sku": "ss123-qr-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3850000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ss123QrRed1 preset when built for graphql`, () => {
    const ss123QrRed1PresetGraphql =
      ss123QrRed1().buildGraphql<TStandalonePriceDraft>();
    expect(ss123QrRed1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ss123-qr-red-1",
        "recurrencePolicy": undefined,
        "sku": "ss123-qr-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3850000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
