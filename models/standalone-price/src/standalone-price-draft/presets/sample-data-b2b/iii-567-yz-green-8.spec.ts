import type { TStandalonePriceDraft } from '../../../types';
import iii567YzGreen8 from './iii-567-yz-green-8';

describe(`with iii567YzGreen8 preset`, () => {
  it(`should return a iii567YzGreen8 preset`, () => {
    const iii567YzGreen8Preset =
      iii567YzGreen8().build<TStandalonePriceDraft>();
    expect(iii567YzGreen8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "iii567-yz-green-8",
        "sku": "iii567-yz-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 13200001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a iii567YzGreen8 preset when built for graphql`, () => {
    const iii567YzGreen8PresetGraphql =
      iii567YzGreen8().buildGraphql<TStandalonePriceDraft>();
    expect(iii567YzGreen8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "iii567-yz-green-8",
        "sku": "iii567-yz-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 13200001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
