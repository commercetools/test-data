import type { TStandalonePriceDraft } from '../../../types';
import m890Op20198 from './m-890-op-2019-8';

describe(`with m890Op20198 preset`, () => {
  it(`should return a m890Op20198 preset`, () => {
    const m890Op20198Preset = m890Op20198().build<TStandalonePriceDraft>();
    expect(m890Op20198Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "m890-op-2019-8",
        "sku": "m890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1210000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a m890Op20198 preset when built for graphql`, () => {
    const m890Op20198PresetGraphql =
      m890Op20198().buildGraphql<TStandalonePriceDraft>();
    expect(m890Op20198PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "m890-op-2019-8",
        "sku": "m890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1210000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
