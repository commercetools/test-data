import type { TStandalonePriceDraft } from '../../../types';
import brakePadSet5 from './brake-pad-set-5';

describe(`with brakePadSet5 preset`, () => {
  it(`should return a brakePadSet5 preset`, () => {
    const brakePadSet5Preset = brakePadSet5().build<TStandalonePriceDraft>();
    expect(brakePadSet5Preset).toMatchInlineSnapshot(`
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
        "key": "brake-pad-set-5",
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

  it(`should return a brakePadSet5 preset when built for graphql`, () => {
    const brakePadSet5PresetGraphql =
      brakePadSet5().buildGraphql<TStandalonePriceDraft>();
    expect(brakePadSet5PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "brake-pad-set-5",
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
