import type { TStandalonePriceDraft } from '../../../types';
import brakePadSet7 from './brake-pad-set-7';

describe(`with brakePadSet7 preset`, () => {
  it(`should return a brakePadSet7 preset`, () => {
    const brakePadSet7Preset = brakePadSet7().build<TStandalonePriceDraft>();
    expect(brakePadSet7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "brake-pad-set-7",
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

  it(`should return a brakePadSet7 preset when built for graphql`, () => {
    const brakePadSet7PresetGraphql =
      brakePadSet7().buildGraphql<TStandalonePriceDraft>();
    expect(brakePadSet7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "brake-pad-set-7",
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
