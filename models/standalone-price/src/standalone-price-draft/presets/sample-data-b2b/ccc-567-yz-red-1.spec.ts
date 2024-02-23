import type { TStandalonePriceDraft } from '../../../types';
import ccc567YzRed1 from './ccc-567-yz-red-1';

describe(`with ccc567YzRed1 preset`, () => {
  it(`should return a ccc567YzRed1 preset`, () => {
    const ccc567YzRed1Preset = ccc567YzRed1().build<TStandalonePriceDraft>();
    expect(ccc567YzRed1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ccc567-yz-red-1",
        "sku": "ccc567-yz-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 9900000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ccc567YzRed1 preset when built for graphql`, () => {
    const ccc567YzRed1PresetGraphql =
      ccc567YzRed1().buildGraphql<TStandalonePriceDraft>();
    expect(ccc567YzRed1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ccc567-yz-red-1",
        "sku": "ccc567-yz-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 9900000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
