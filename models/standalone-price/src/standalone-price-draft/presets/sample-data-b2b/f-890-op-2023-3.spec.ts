import type { TStandalonePriceDraft } from '../../../types';
import f890Op20233 from './f-890-op-2023-3';

describe(`with f890Op20233 preset`, () => {
  it(`should return a f890Op20233 preset`, () => {
    const f890Op20233Preset = f890Op20233().build<TStandalonePriceDraft>();
    expect(f890Op20233Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "f890-op-2023-3",
        "sku": "f890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1540000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a f890Op20233 preset when built for graphql`, () => {
    const f890Op20233PresetGraphql =
      f890Op20233().buildGraphql<TStandalonePriceDraft>();
    expect(f890Op20233PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "f890-op-2023-3",
        "sku": "f890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1540000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
