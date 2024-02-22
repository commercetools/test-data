import type { TStandalonePriceDraft } from '../../../types';
import ccc567YzBlue1 from './ccc-567-yz-blue-1';

describe(`with ccc567YzBlue1 preset`, () => {
  it(`should return a ccc567YzBlue1 preset`, () => {
    const ccc567YzBlue1Preset = ccc567YzBlue1().build<TStandalonePriceDraft>();
    expect(ccc567YzBlue1Preset).toMatchInlineSnapshot(`
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
        "key": "ccc567-yz-blue-1",
        "sku": "ccc567-yz-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 10890000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ccc567YzBlue1 preset when built for graphql`, () => {
    const ccc567YzBlue1PresetGraphql =
      ccc567YzBlue1().buildGraphql<TStandalonePriceDraft>();
    expect(ccc567YzBlue1PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "ccc567-yz-blue-1",
        "sku": "ccc567-yz-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 10890000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
