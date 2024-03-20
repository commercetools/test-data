import type { TStandalonePriceDraft } from '../../../types';
import iii567YzBlue5 from './iii-567-yz-blue-5';

describe(`with iii567YzBlue5 preset`, () => {
  it(`should return a iii567YzBlue5 preset`, () => {
    const iii567YzBlue5Preset = iii567YzBlue5().build<TStandalonePriceDraft>();
    expect(iii567YzBlue5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "iii567-yz-blue-5",
        "sku": "iii567-yz-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 10800000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a iii567YzBlue5 preset when built for graphql`, () => {
    const iii567YzBlue5PresetGraphql =
      iii567YzBlue5().buildGraphql<TStandalonePriceDraft>();
    expect(iii567YzBlue5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "iii567-yz-blue-5",
        "sku": "iii567-yz-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 10800000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
