import type { TStandalonePriceDraft } from '../../../types';
import f890Op20238 from './f-890-op-2023-8';

describe(`with f890Op20238 preset`, () => {
  it(`should return a f890Op20238 preset`, () => {
    const f890Op20238Preset = f890Op20238().build<TStandalonePriceDraft>();
    expect(f890Op20238Preset).toMatchInlineSnapshot(`
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
        "key": "f890-op-2023-8",
        "sku": "f890-op-2023",
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

  it(`should return a f890Op20238 preset when built for graphql`, () => {
    const f890Op20238PresetGraphql =
      f890Op20238().buildGraphql<TStandalonePriceDraft>();
    expect(f890Op20238PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "f890-op-2023-8",
        "sku": "f890-op-2023",
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
