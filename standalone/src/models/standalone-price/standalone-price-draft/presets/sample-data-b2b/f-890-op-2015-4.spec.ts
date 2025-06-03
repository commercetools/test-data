import type { TStandalonePriceDraft } from '../../../types';
import f890Op20154 from './f-890-op-2015-4';

describe(`with f890Op20154 preset`, () => {
  it(`should return a f890Op20154 preset`, () => {
    const f890Op20154Preset = f890Op20154().build<TStandalonePriceDraft>();
    expect(f890Op20154Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "f890-op-2015-4",
        "recurrencePolicy": undefined,
        "sku": "f890-op-2015",
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

  it(`should return a f890Op20154 preset when built for graphql`, () => {
    const f890Op20154PresetGraphql =
      f890Op20154().buildGraphql<TStandalonePriceDraft>();
    expect(f890Op20154PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "f890-op-2015-4",
        "recurrencePolicy": undefined,
        "sku": "f890-op-2015",
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
