import type { TStandalonePriceDraft } from '../../../types';
import iii567YzRed5 from './iii-567-yz-red-5';

describe(`with iii567YzRed5 preset`, () => {
  it(`should return a iii567YzRed5 preset`, () => {
    const iii567YzRed5Preset = iii567YzRed5().build<TStandalonePriceDraft>();
    expect(iii567YzRed5Preset).toMatchInlineSnapshot(`
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
        "key": "iii567-yz-red-5",
        "sku": "iii567-yz-red",
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

  it(`should return a iii567YzRed5 preset when built for graphql`, () => {
    const iii567YzRed5PresetGraphql =
      iii567YzRed5().buildGraphql<TStandalonePriceDraft>();
    expect(iii567YzRed5PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "iii567-yz-red-5",
        "sku": "iii567-yz-red",
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
