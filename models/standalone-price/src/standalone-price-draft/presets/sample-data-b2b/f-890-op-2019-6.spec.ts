import type { TStandalonePriceDraft } from '../../../types';
import f890Op20196 from './f-890-op-2019-6';

describe(`with f890Op20196 preset`, () => {
  it(`should return a f890Op20196 preset`, () => {
    const f890Op20196Preset = f890Op20196().build<TStandalonePriceDraft>();
    expect(f890Op20196Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "f890-op-2019-6",
        "sku": "f890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 800000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a f890Op20196 preset when built for graphql`, () => {
    const f890Op20196PresetGraphql =
      f890Op20196().buildGraphql<TStandalonePriceDraft>();
    expect(f890Op20196PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "f890-op-2019-6",
        "sku": "f890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 800000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
