import type { TStandalonePriceDraft } from '../../../types';
import f890Op20198 from './f-890-op-2019-8';

describe(`with f890Op20198 preset`, () => {
  it(`should return a f890Op20198 preset`, () => {
    const f890Op20198Preset = f890Op20198().build<TStandalonePriceDraft>();
    expect(f890Op20198Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "f890-op-2019-8",
        "sku": "f890-op-2019",
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

  it(`should return a f890Op20198 preset when built for graphql`, () => {
    const f890Op20198PresetGraphql =
      f890Op20198().buildGraphql<TStandalonePriceDraft>();
    expect(f890Op20198PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "f890-op-2019-8",
        "sku": "f890-op-2019",
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
