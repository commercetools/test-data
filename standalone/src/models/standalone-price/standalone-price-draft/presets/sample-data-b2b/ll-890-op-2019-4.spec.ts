import type { TStandalonePriceDraft } from '../../../types';
import ll890Op20194 from './ll-890-op-2019-4';

describe(`with ll890Op20194 preset`, () => {
  it(`should return a ll890Op20194 preset`, () => {
    const ll890Op20194Preset = ll890Op20194().build<TStandalonePriceDraft>();
    expect(ll890Op20194Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ll890-op-2019-4",
        "recurrencePolicy": undefined,
        "sku": "ll890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3500000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ll890Op20194 preset when built for graphql`, () => {
    const ll890Op20194PresetGraphql =
      ll890Op20194().buildGraphql<TStandalonePriceDraft>();
    expect(ll890Op20194PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ll890-op-2019-4",
        "recurrencePolicy": undefined,
        "sku": "ll890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3500000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
