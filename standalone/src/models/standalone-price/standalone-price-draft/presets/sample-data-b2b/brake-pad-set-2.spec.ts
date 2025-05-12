import type { TStandalonePriceDraft } from '../../../types';
import brakePadSet2 from './brake-pad-set-2';

describe(`with brakePadSet2 preset`, () => {
  it(`should return a brakePadSet2 preset`, () => {
    const brakePadSet2Preset = brakePadSet2().build<TStandalonePriceDraft>();
    expect(brakePadSet2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "brake-pad-set-2",
        "sku": "brake-pad-set",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 10000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a brakePadSet2 preset when built for graphql`, () => {
    const brakePadSet2PresetGraphql =
      brakePadSet2().buildGraphql<TStandalonePriceDraft>();
    expect(brakePadSet2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "brake-pad-set-2",
        "sku": "brake-pad-set",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 10000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
