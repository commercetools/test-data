import type { TStandalonePriceDraft } from '../../../types';
import f890Op20234 from './f-890-op-2023-4';

describe(`with f890Op20234 preset`, () => {
  it(`should return a f890Op20234 preset`, () => {
    const f890Op20234Preset = f890Op20234().build<TStandalonePriceDraft>();
    expect(f890Op20234Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "f890-op-2023-4",
        "sku": "f890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1000000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a f890Op20234 preset when built for graphql`, () => {
    const f890Op20234PresetGraphql =
      f890Op20234().buildGraphql<TStandalonePriceDraft>();
    expect(f890Op20234PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "f890-op-2023-4",
        "sku": "f890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1000000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
