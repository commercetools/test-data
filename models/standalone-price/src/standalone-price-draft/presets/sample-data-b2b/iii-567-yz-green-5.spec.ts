import type { TStandalonePriceDraft } from '../../../types';
import iii567YzGreen5 from './iii-567-yz-green-5';

describe(`with iii567YzGreen5 preset`, () => {
  it(`should return a iii567YzGreen5 preset`, () => {
    const iii567YzGreen5Preset =
      iii567YzGreen5().build<TStandalonePriceDraft>();
    expect(iii567YzGreen5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "iii567-yz-green-5",
        "sku": "iii567-yz-green",
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

  it(`should return a iii567YzGreen5 preset when built for graphql`, () => {
    const iii567YzGreen5PresetGraphql =
      iii567YzGreen5().buildGraphql<TStandalonePriceDraft>();
    expect(iii567YzGreen5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "iii567-yz-green-5",
        "sku": "iii567-yz-green",
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
