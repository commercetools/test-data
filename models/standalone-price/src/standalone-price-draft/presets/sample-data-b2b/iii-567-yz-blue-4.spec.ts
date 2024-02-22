import type { TStandalonePriceDraft } from '../../../types';
import iii567YzBlue4 from './iii-567-yz-blue-4';

describe(`with iii567YzBlue4 preset`, () => {
  it(`should return a iii567YzBlue4 preset`, () => {
    const iii567YzBlue4Preset = iii567YzBlue4().build<TStandalonePriceDraft>();
    expect(iii567YzBlue4Preset).toMatchInlineSnapshot(`
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
        "key": "iii567-yz-blue-4",
        "sku": "iii567-yz-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 12000000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a iii567YzBlue4 preset when built for graphql`, () => {
    const iii567YzBlue4PresetGraphql =
      iii567YzBlue4().buildGraphql<TStandalonePriceDraft>();
    expect(iii567YzBlue4PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "iii567-yz-blue-4",
        "sku": "iii567-yz-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 12000000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
