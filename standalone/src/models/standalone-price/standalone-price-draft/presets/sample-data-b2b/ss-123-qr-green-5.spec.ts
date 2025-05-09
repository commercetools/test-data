import type { TStandalonePriceDraft } from '../../../types';
import ss123QrGreen5 from './ss-123-qr-green-5';

describe(`with ss123QrGreen5 preset`, () => {
  it(`should return a ss123QrGreen5 preset`, () => {
    const ss123QrGreen5Preset = ss123QrGreen5().build<TStandalonePriceDraft>();
    expect(ss123QrGreen5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ss123-qr-green-5",
        "sku": "ss123-qr-green",
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

  it(`should return a ss123QrGreen5 preset when built for graphql`, () => {
    const ss123QrGreen5PresetGraphql =
      ss123QrGreen5().buildGraphql<TStandalonePriceDraft>();
    expect(ss123QrGreen5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ss123-qr-green-5",
        "sku": "ss123-qr-green",
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
