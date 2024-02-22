import type { TStandalonePriceDraft } from '../../../types';
import iii567YzGreen3 from './iii-567-yz-green-3';

describe(`with iii567YzGreen3 preset`, () => {
  it(`should return a iii567YzGreen3 preset`, () => {
    const iii567YzGreen3Preset =
      iii567YzGreen3().build<TStandalonePriceDraft>();
    expect(iii567YzGreen3Preset).toMatchInlineSnapshot(`
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
        "key": "iii567-yz-green-3",
        "sku": "iii567-yz-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 18480000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a iii567YzGreen3 preset when built for graphql`, () => {
    const iii567YzGreen3PresetGraphql =
      iii567YzGreen3().buildGraphql<TStandalonePriceDraft>();
    expect(iii567YzGreen3PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "iii567-yz-green-3",
        "sku": "iii567-yz-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 18480000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
