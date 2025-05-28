import type { TStandalonePriceDraft } from '../../../types';
import iii567YzGreen7 from './iii-567-yz-green-7';

describe(`with iii567YzGreen7 preset`, () => {
  it(`should return a iii567YzGreen7 preset`, () => {
    const iii567YzGreen7Preset =
      iii567YzGreen7().build<TStandalonePriceDraft>();
    expect(iii567YzGreen7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "iii567-yz-green-7",
        "recurrencePolicy": undefined,
        "sku": "iii567-yz-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 14400000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a iii567YzGreen7 preset when built for graphql`, () => {
    const iii567YzGreen7PresetGraphql =
      iii567YzGreen7().buildGraphql<TStandalonePriceDraft>();
    expect(iii567YzGreen7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "iii567-yz-green-7",
        "recurrencePolicy": undefined,
        "sku": "iii567-yz-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 14400000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
