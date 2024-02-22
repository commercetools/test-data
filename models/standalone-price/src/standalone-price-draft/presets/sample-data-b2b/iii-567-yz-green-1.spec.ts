import type { TStandalonePriceDraft } from '../../../types';
import iii567YzGreen1 from './iii-567-yz-green-1';

describe(`with iii567YzGreen1 preset`, () => {
  it(`should return a iii567YzGreen1 preset`, () => {
    const iii567YzGreen1Preset =
      iii567YzGreen1().build<TStandalonePriceDraft>();
    expect(iii567YzGreen1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "iii567-yz-green-1",
        "sku": "iii567-yz-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 15840000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a iii567YzGreen1 preset when built for graphql`, () => {
    const iii567YzGreen1PresetGraphql =
      iii567YzGreen1().buildGraphql<TStandalonePriceDraft>();
    expect(iii567YzGreen1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "iii567-yz-green-1",
        "sku": "iii567-yz-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 15840000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
