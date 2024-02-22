import type { TStandalonePriceDraft } from '../../../types';
import m890Op20157 from './m-890-op-2015-7';

describe(`with m890Op20157 preset`, () => {
  it(`should return a m890Op20157 preset`, () => {
    const m890Op20157Preset = m890Op20157().build<TStandalonePriceDraft>();
    expect(m890Op20157Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "m890-op-2015-7",
        "sku": "m890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1320000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a m890Op20157 preset when built for graphql`, () => {
    const m890Op20157PresetGraphql =
      m890Op20157().buildGraphql<TStandalonePriceDraft>();
    expect(m890Op20157PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "m890-op-2015-7",
        "sku": "m890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1320000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
