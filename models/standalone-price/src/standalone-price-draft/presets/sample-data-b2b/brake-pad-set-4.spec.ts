import type { TStandalonePriceDraft } from '../../../types';
import brakePadSet4 from './brake-pad-set-4';

describe(`with brakePadSet4 preset`, () => {
  it(`should return a brakePadSet4 preset`, () => {
    const brakePadSet4Preset = brakePadSet4().build<TStandalonePriceDraft>();
    expect(brakePadSet4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "brake-pad-set-4",
        "sku": "brake-pad-set",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 10000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a brakePadSet4 preset when built for graphql`, () => {
    const brakePadSet4PresetGraphql =
      brakePadSet4().buildGraphql<TStandalonePriceDraft>();
    expect(brakePadSet4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "brake-pad-set-4",
        "sku": "brake-pad-set",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 10000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
