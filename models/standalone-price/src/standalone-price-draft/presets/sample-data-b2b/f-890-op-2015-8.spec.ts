import type { TStandalonePriceDraft } from '../../../types';
import f890Op20158 from './f-890-op-2015-8';

describe(`with f890Op20158 preset`, () => {
  it(`should return a f890Op20158 preset`, () => {
    const f890Op20158Preset = f890Op20158().build<TStandalonePriceDraft>();
    expect(f890Op20158Preset).toMatchInlineSnapshot(`
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
        "key": "f890-op-2015-8",
        "sku": "f890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1100000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a f890Op20158 preset when built for graphql`, () => {
    const f890Op20158PresetGraphql =
      f890Op20158().buildGraphql<TStandalonePriceDraft>();
    expect(f890Op20158PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "f890-op-2015-8",
        "sku": "f890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1100000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
