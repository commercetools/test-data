import type { TStandalonePriceDraft } from '../../../types';
import ss123QrGreen8 from './ss-123-qr-green-8';

describe(`with ss123QrGreen8 preset`, () => {
  it(`should return a ss123QrGreen8 preset`, () => {
    const ss123QrGreen8Preset = ss123QrGreen8().build<TStandalonePriceDraft>();
    expect(ss123QrGreen8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ss123-qr-green-8",
        "sku": "ss123-qr-green",
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

  it(`should return a ss123QrGreen8 preset when built for graphql`, () => {
    const ss123QrGreen8PresetGraphql =
      ss123QrGreen8().buildGraphql<TStandalonePriceDraft>();
    expect(ss123QrGreen8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ss123-qr-green-8",
        "sku": "ss123-qr-green",
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
