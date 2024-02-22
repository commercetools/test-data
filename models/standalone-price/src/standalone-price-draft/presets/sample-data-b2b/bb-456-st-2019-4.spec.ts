import type { TStandalonePriceDraft } from '../../../types';
import bb456St20194 from './bb-456-st-2019-4';

describe(`with bb456St20194 preset`, () => {
  it(`should return a bb456St20194 preset`, () => {
    const bb456St20194Preset = bb456St20194().build<TStandalonePriceDraft>();
    expect(bb456St20194Preset).toMatchInlineSnapshot(`
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
        "key": "bb456-st-2019-4",
        "sku": "bb456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1800000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a bb456St20194 preset when built for graphql`, () => {
    const bb456St20194PresetGraphql =
      bb456St20194().buildGraphql<TStandalonePriceDraft>();
    expect(bb456St20194PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "bb456-st-2019-4",
        "sku": "bb456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1800000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
