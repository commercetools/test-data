import type { TStandalonePriceDraft } from '../../../types';
import ff890Op20191 from './ff-890-op-2019-1';

describe(`with ff890Op20191 preset`, () => {
  it(`should return a ff890Op20191 preset`, () => {
    const ff890Op20191Preset = ff890Op20191().build<TStandalonePriceDraft>();
    expect(ff890Op20191Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ff890-op-2019-1",
        "recurrencePolicy": undefined,
        "sku": "ff890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3025000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ff890Op20191 preset when built for graphql`, () => {
    const ff890Op20191PresetGraphql =
      ff890Op20191().buildGraphql<TStandalonePriceDraft>();
    expect(ff890Op20191PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ff890-op-2019-1",
        "recurrencePolicy": undefined,
        "sku": "ff890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3025000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
