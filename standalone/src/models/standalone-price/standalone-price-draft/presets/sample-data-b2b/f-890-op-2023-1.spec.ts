import type { TStandalonePriceDraft } from '../../../types';
import f890Op20231 from './f-890-op-2023-1';

describe(`with f890Op20231 preset`, () => {
  it(`should return a f890Op20231 preset`, () => {
    const f890Op20231Preset = f890Op20231().build<TStandalonePriceDraft>();
    expect(f890Op20231Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "f890-op-2023-1",
        "sku": "f890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1320000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a f890Op20231 preset when built for graphql`, () => {
    const f890Op20231PresetGraphql =
      f890Op20231().buildGraphql<TStandalonePriceDraft>();
    expect(f890Op20231PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "f890-op-2023-1",
        "sku": "f890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1320000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
