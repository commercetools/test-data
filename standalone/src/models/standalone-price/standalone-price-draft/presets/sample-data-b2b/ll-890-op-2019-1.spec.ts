import type { TStandalonePriceDraft } from '../../../types';
import ll890Op20191 from './ll-890-op-2019-1';

describe(`with ll890Op20191 preset`, () => {
  it(`should return a ll890Op20191 preset`, () => {
    const ll890Op20191Preset = ll890Op20191().build<TStandalonePriceDraft>();
    expect(ll890Op20191Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ll890-op-2019-1",
        "recurrencePolicy": undefined,
        "sku": "ll890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4235001,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ll890Op20191 preset when built for graphql`, () => {
    const ll890Op20191PresetGraphql =
      ll890Op20191().buildGraphql<TStandalonePriceDraft>();
    expect(ll890Op20191PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ll890-op-2019-1",
        "recurrencePolicy": undefined,
        "sku": "ll890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4235001,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
