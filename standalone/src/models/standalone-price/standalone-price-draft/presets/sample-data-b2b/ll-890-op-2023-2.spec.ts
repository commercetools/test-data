import type { TStandalonePriceDraft } from '../../../types';
import ll890Op20232 from './ll-890-op-2023-2';

describe(`with ll890Op20232 preset`, () => {
  it(`should return a ll890Op20232 preset`, () => {
    const ll890Op20232Preset = ll890Op20232().build<TStandalonePriceDraft>();
    expect(ll890Op20232Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ll890-op-2023-2",
        "recurrencePolicy": undefined,
        "sku": "ll890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4235001,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ll890Op20232 preset when built for graphql`, () => {
    const ll890Op20232PresetGraphql =
      ll890Op20232().buildGraphql<TStandalonePriceDraft>();
    expect(ll890Op20232PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ll890-op-2023-2",
        "recurrencePolicy": undefined,
        "sku": "ll890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4235001,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
