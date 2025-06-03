import type { TStandalonePriceDraft } from '../../../types';
import m890Op20234 from './m-890-op-2023-4';

describe(`with m890Op20234 preset`, () => {
  it(`should return a m890Op20234 preset`, () => {
    const m890Op20234Preset = m890Op20234().build<TStandalonePriceDraft>();
    expect(m890Op20234Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "m890-op-2023-4",
        "recurrencePolicy": undefined,
        "sku": "m890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1100000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a m890Op20234 preset when built for graphql`, () => {
    const m890Op20234PresetGraphql =
      m890Op20234().buildGraphql<TStandalonePriceDraft>();
    expect(m890Op20234PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "m890-op-2023-4",
        "recurrencePolicy": undefined,
        "sku": "m890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1100000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
