import type { TStandalonePriceDraft } from '../../../types';
import rr890Op20234 from './rr-890-op-2023-4';

describe(`with rr890Op20234 preset`, () => {
  it(`should return a rr890Op20234 preset`, () => {
    const rr890Op20234Preset = rr890Op20234().build<TStandalonePriceDraft>();
    expect(rr890Op20234Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "rr890-op-2023-4",
        "recurrencePolicy": undefined,
        "sku": "rr890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3000000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a rr890Op20234 preset when built for graphql`, () => {
    const rr890Op20234PresetGraphql =
      rr890Op20234().buildGraphql<TStandalonePriceDraft>();
    expect(rr890Op20234PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "rr890-op-2023-4",
        "recurrencePolicy": undefined,
        "sku": "rr890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3000000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
