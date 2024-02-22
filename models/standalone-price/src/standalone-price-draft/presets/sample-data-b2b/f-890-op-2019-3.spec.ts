import type { TStandalonePriceDraft } from '../../../types';
import f890Op20193 from './f-890-op-2019-3';

describe(`with f890Op20193 preset`, () => {
  it(`should return a f890Op20193 preset`, () => {
    const f890Op20193Preset = f890Op20193().build<TStandalonePriceDraft>();
    expect(f890Op20193Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "f890-op-2019-3",
        "sku": "f890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1430000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a f890Op20193 preset when built for graphql`, () => {
    const f890Op20193PresetGraphql =
      f890Op20193().buildGraphql<TStandalonePriceDraft>();
    expect(f890Op20193PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "f890-op-2019-3",
        "sku": "f890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1430000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
