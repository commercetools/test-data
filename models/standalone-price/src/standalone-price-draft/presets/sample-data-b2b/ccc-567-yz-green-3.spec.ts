import type { TStandalonePriceDraft } from '../../../types';
import ccc567YzGreen3 from './ccc-567-yz-green-3';

describe(`with ccc567YzGreen3 preset`, () => {
  it(`should return a ccc567YzGreen3 preset`, () => {
    const ccc567YzGreen3Preset =
      ccc567YzGreen3().build<TStandalonePriceDraft>();
    expect(ccc567YzGreen3Preset).toMatchInlineSnapshot(`
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
        "key": "ccc567-yz-green-3",
        "sku": "ccc567-yz-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 13860000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ccc567YzGreen3 preset when built for graphql`, () => {
    const ccc567YzGreen3PresetGraphql =
      ccc567YzGreen3().buildGraphql<TStandalonePriceDraft>();
    expect(ccc567YzGreen3PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "ccc567-yz-green-3",
        "sku": "ccc567-yz-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 13860000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
