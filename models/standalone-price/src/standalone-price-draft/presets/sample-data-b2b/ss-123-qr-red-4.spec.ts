import type { TStandalonePriceDraft } from '../../../types';
import ss123QrRed4 from './ss-123-qr-red-4';

describe(`with ss123QrRed4 preset`, () => {
  it(`should return a ss123QrRed4 preset`, () => {
    const ss123QrRed4Preset = ss123QrRed4().build<TStandalonePriceDraft>();
    expect(ss123QrRed4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ss123-qr-red-4",
        "sku": "ss123-qr-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3500000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ss123QrRed4 preset when built for graphql`, () => {
    const ss123QrRed4PresetGraphql =
      ss123QrRed4().buildGraphql<TStandalonePriceDraft>();
    expect(ss123QrRed4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ss123-qr-red-4",
        "sku": "ss123-qr-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3500000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
