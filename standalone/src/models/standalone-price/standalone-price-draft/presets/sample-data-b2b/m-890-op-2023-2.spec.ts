import type { TStandalonePriceDraft } from '../../../types';
import m890Op20232 from './m-890-op-2023-2';

describe(`with m890Op20232 preset`, () => {
  it(`should return a m890Op20232 preset`, () => {
    const m890Op20232Preset = m890Op20232().build<TStandalonePriceDraft>();
    expect(m890Op20232Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "m890-op-2023-2",
        "recurrencePolicy": undefined,
        "sku": "m890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1331000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a m890Op20232 preset when built for graphql`, () => {
    const m890Op20232PresetGraphql =
      m890Op20232().buildGraphql<TStandalonePriceDraft>();
    expect(m890Op20232PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "m890-op-2023-2",
        "recurrencePolicy": undefined,
        "sku": "m890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1331000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
