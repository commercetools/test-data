import type { TStandalonePriceDraft } from '../../../types';
import m890Op20238 from './m-890-op-2023-8';

describe(`with m890Op20238 preset`, () => {
  it(`should return a m890Op20238 preset`, () => {
    const m890Op20238Preset = m890Op20238().build<TStandalonePriceDraft>();
    expect(m890Op20238Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "m890-op-2023-8",
        "sku": "m890-op-2023",
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

  it(`should return a m890Op20238 preset when built for graphql`, () => {
    const m890Op20238PresetGraphql =
      m890Op20238().buildGraphql<TStandalonePriceDraft>();
    expect(m890Op20238PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "m890-op-2023-8",
        "sku": "m890-op-2023",
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
