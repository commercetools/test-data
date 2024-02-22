import type { TStandalonePriceDraft } from '../../../types';
import ss123QrGreen4 from './ss-123-qr-green-4';

describe(`with ss123QrGreen4 preset`, () => {
  it(`should return a ss123QrGreen4 preset`, () => {
    const ss123QrGreen4Preset = ss123QrGreen4().build<TStandalonePriceDraft>();
    expect(ss123QrGreen4Preset).toMatchInlineSnapshot(`
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
        "key": "ss123-qr-green-4",
        "sku": "ss123-qr-green",
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

  it(`should return a ss123QrGreen4 preset when built for graphql`, () => {
    const ss123QrGreen4PresetGraphql =
      ss123QrGreen4().buildGraphql<TStandalonePriceDraft>();
    expect(ss123QrGreen4PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "ss123-qr-green-4",
        "sku": "ss123-qr-green",
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
