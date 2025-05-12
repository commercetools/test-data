import type { TStandalonePriceDraft } from '../../../types';
import iii567YzGreen4 from './iii-567-yz-green-4';

describe(`with iii567YzGreen4 preset`, () => {
  it(`should return a iii567YzGreen4 preset`, () => {
    const iii567YzGreen4Preset =
      iii567YzGreen4().build<TStandalonePriceDraft>();
    expect(iii567YzGreen4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "iii567-yz-green-4",
        "sku": "iii567-yz-green",
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

  it(`should return a iii567YzGreen4 preset when built for graphql`, () => {
    const iii567YzGreen4PresetGraphql =
      iii567YzGreen4().buildGraphql<TStandalonePriceDraft>();
    expect(iii567YzGreen4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "iii567-yz-green-4",
        "sku": "iii567-yz-green",
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
