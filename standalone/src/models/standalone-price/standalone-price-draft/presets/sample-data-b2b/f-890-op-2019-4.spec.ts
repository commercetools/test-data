import type { TStandalonePriceDraft } from '../../../types';
import f890Op20194 from './f-890-op-2019-4';

describe(`with f890Op20194 preset`, () => {
  it(`should return a f890Op20194 preset`, () => {
    const f890Op20194Preset = f890Op20194().build<TStandalonePriceDraft>();
    expect(f890Op20194Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "f890-op-2019-4",
        "sku": "f890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1000000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a f890Op20194 preset when built for graphql`, () => {
    const f890Op20194PresetGraphql =
      f890Op20194().buildGraphql<TStandalonePriceDraft>();
    expect(f890Op20194PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "f890-op-2019-4",
        "sku": "f890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1000000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
