import type { TStandalonePriceDraft } from '../../../types';
import ww567YzBlue6 from './ww-567-yz-blue-6';

describe(`with ww567YzBlue6 preset`, () => {
  it(`should return a ww567YzBlue6 preset`, () => {
    const ww567YzBlue6Preset = ww567YzBlue6().build<TStandalonePriceDraft>();
    expect(ww567YzBlue6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ww567-yz-blue-6",
        "sku": "ww567-yz-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3600000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ww567YzBlue6 preset when built for graphql`, () => {
    const ww567YzBlue6PresetGraphql =
      ww567YzBlue6().buildGraphql<TStandalonePriceDraft>();
    expect(ww567YzBlue6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ww567-yz-blue-6",
        "sku": "ww567-yz-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3600000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
