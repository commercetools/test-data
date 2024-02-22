import type { TStandalonePriceDraft } from '../../../types';
import f890Op20155 from './f-890-op-2015-5';

describe(`with f890Op20155 preset`, () => {
  it(`should return a f890Op20155 preset`, () => {
    const f890Op20155Preset = f890Op20155().build<TStandalonePriceDraft>();
    expect(f890Op20155Preset).toMatchInlineSnapshot(`
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
        "key": "f890-op-2015-5",
        "sku": "f890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 900000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a f890Op20155 preset when built for graphql`, () => {
    const f890Op20155PresetGraphql =
      f890Op20155().buildGraphql<TStandalonePriceDraft>();
    expect(f890Op20155PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "f890-op-2015-5",
        "sku": "f890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 900000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
