import type { TStandalonePriceDraft } from '../../../types';
import f890Op20232 from './f-890-op-2023-2';

describe(`with f890Op20232 preset`, () => {
  it(`should return a f890Op20232 preset`, () => {
    const f890Op20232Preset = f890Op20232().build<TStandalonePriceDraft>();
    expect(f890Op20232Preset).toMatchInlineSnapshot(`
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
        "key": "f890-op-2023-2",
        "sku": "f890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1210000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a f890Op20232 preset when built for graphql`, () => {
    const f890Op20232PresetGraphql =
      f890Op20232().buildGraphql<TStandalonePriceDraft>();
    expect(f890Op20232PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "f890-op-2023-2",
        "sku": "f890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1210000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
