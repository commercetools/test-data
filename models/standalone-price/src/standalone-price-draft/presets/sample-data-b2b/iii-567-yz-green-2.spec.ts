import type { TStandalonePriceDraft } from '../../../types';
import iii567YzGreen2 from './iii-567-yz-green-2';

describe(`with iii567YzGreen2 preset`, () => {
  it(`should return a iii567YzGreen2 preset`, () => {
    const iii567YzGreen2Preset =
      iii567YzGreen2().build<TStandalonePriceDraft>();
    expect(iii567YzGreen2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "iii567-yz-green-2",
        "sku": "iii567-yz-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 14520001,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a iii567YzGreen2 preset when built for graphql`, () => {
    const iii567YzGreen2PresetGraphql =
      iii567YzGreen2().buildGraphql<TStandalonePriceDraft>();
    expect(iii567YzGreen2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "iii567-yz-green-2",
        "sku": "iii567-yz-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 14520001,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
