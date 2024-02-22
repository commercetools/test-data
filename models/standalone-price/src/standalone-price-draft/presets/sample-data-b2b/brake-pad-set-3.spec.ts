import type { TStandalonePriceDraft } from '../../../types';
import brakePadSet3 from './brake-pad-set-3';

describe(`with brakePadSet3 preset`, () => {
  it(`should return a brakePadSet3 preset`, () => {
    const brakePadSet3Preset = brakePadSet3().build<TStandalonePriceDraft>();
    expect(brakePadSet3Preset).toMatchInlineSnapshot(`
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
        "key": "brake-pad-set-3",
        "sku": "brake-pad-set",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 10000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a brakePadSet3 preset when built for graphql`, () => {
    const brakePadSet3PresetGraphql =
      brakePadSet3().buildGraphql<TStandalonePriceDraft>();
    expect(brakePadSet3PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "brake-pad-set-3",
        "sku": "brake-pad-set",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 10000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
