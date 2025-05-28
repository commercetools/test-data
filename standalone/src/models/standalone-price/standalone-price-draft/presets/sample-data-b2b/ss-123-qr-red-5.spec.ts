import type { TStandalonePriceDraft } from '../../../types';
import ss123QrRed5 from './ss-123-qr-red-5';

describe(`with ss123QrRed5 preset`, () => {
  it(`should return a ss123QrRed5 preset`, () => {
    const ss123QrRed5Preset = ss123QrRed5().build<TStandalonePriceDraft>();
    expect(ss123QrRed5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ss123-qr-red-5",
        "recurrencePolicy": undefined,
        "sku": "ss123-qr-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3150000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ss123QrRed5 preset when built for graphql`, () => {
    const ss123QrRed5PresetGraphql =
      ss123QrRed5().buildGraphql<TStandalonePriceDraft>();
    expect(ss123QrRed5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ss123-qr-red-5",
        "recurrencePolicy": undefined,
        "sku": "ss123-qr-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3150000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
