import type { TStandalonePriceDraft } from '../../../types';
import iii567YzRed3 from './iii-567-yz-red-3';

describe(`with iii567YzRed3 preset`, () => {
  it(`should return a iii567YzRed3 preset`, () => {
    const iii567YzRed3Preset = iii567YzRed3().build<TStandalonePriceDraft>();
    expect(iii567YzRed3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "iii567-yz-red-3",
        "sku": "iii567-yz-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 15840000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a iii567YzRed3 preset when built for graphql`, () => {
    const iii567YzRed3PresetGraphql =
      iii567YzRed3().buildGraphql<TStandalonePriceDraft>();
    expect(iii567YzRed3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "iii567-yz-red-3",
        "sku": "iii567-yz-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 15840000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
