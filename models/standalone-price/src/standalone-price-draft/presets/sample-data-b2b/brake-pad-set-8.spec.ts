import type { TStandalonePriceDraft } from '../../../types';
import brakePadSet8 from './brake-pad-set-8';

describe(`with brakePadSet8 preset`, () => {
  it(`should return a brakePadSet8 preset`, () => {
    const brakePadSet8Preset = brakePadSet8().build<TStandalonePriceDraft>();
    expect(brakePadSet8Preset).toMatchInlineSnapshot(`
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
        "key": "brake-pad-set-8",
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

  it(`should return a brakePadSet8 preset when built for graphql`, () => {
    const brakePadSet8PresetGraphql =
      brakePadSet8().buildGraphql<TStandalonePriceDraft>();
    expect(brakePadSet8PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "brake-pad-set-8",
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
