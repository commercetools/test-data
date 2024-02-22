import type { TStandalonePriceDraft } from '../../../types';
import ss123QrGreen1 from './ss-123-qr-green-1';

describe(`with ss123QrGreen1 preset`, () => {
  it(`should return a ss123QrGreen1 preset`, () => {
    const ss123QrGreen1Preset = ss123QrGreen1().build<TStandalonePriceDraft>();
    expect(ss123QrGreen1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ss123-qr-green-1",
        "sku": "ss123-qr-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4620000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ss123QrGreen1 preset when built for graphql`, () => {
    const ss123QrGreen1PresetGraphql =
      ss123QrGreen1().buildGraphql<TStandalonePriceDraft>();
    expect(ss123QrGreen1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ss123-qr-green-1",
        "sku": "ss123-qr-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4620000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
