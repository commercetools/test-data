import type { TStandalonePriceDraft } from '../../../types';
import ww567YzBlue1 from './ww-567-yz-blue-1';

describe(`with ww567YzBlue1 preset`, () => {
  it(`should return a ww567YzBlue1 preset`, () => {
    const ww567YzBlue1Preset = ww567YzBlue1().build<TStandalonePriceDraft>();
    expect(ww567YzBlue1Preset).toMatchInlineSnapshot(`
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
        "key": "ww567-yz-blue-1",
        "sku": "ww567-yz-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 5445000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ww567YzBlue1 preset when built for graphql`, () => {
    const ww567YzBlue1PresetGraphql =
      ww567YzBlue1().buildGraphql<TStandalonePriceDraft>();
    expect(ww567YzBlue1PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "ww567-yz-blue-1",
        "sku": "ww567-yz-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 5445000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
