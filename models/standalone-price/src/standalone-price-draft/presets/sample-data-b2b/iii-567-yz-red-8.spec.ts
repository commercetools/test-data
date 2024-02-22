import type { TStandalonePriceDraft } from '../../../types';
import iii567YzRed8 from './iii-567-yz-red-8';

describe(`with iii567YzRed8 preset`, () => {
  it(`should return a iii567YzRed8 preset`, () => {
    const iii567YzRed8Preset = iii567YzRed8().build<TStandalonePriceDraft>();
    expect(iii567YzRed8Preset).toMatchInlineSnapshot(`
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
        "key": "iii567-yz-red-8",
        "sku": "iii567-yz-red",
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

  it(`should return a iii567YzRed8 preset when built for graphql`, () => {
    const iii567YzRed8PresetGraphql =
      iii567YzRed8().buildGraphql<TStandalonePriceDraft>();
    expect(iii567YzRed8PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "iii567-yz-red-8",
        "sku": "iii567-yz-red",
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
