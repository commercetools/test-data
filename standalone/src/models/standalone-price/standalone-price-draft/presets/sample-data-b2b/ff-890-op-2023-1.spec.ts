import type { TStandalonePriceDraft } from '../../../types';
import ff890Op20231 from './ff-890-op-2023-1';

describe(`with ff890Op20231 preset`, () => {
  it(`should return a ff890Op20231 preset`, () => {
    const ff890Op20231Preset = ff890Op20231().build<TStandalonePriceDraft>();
    expect(ff890Op20231Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ff890-op-2023-1",
        "recurrencePolicy": undefined,
        "sku": "ff890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3300000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ff890Op20231 preset when built for graphql`, () => {
    const ff890Op20231PresetGraphql =
      ff890Op20231().buildGraphql<TStandalonePriceDraft>();
    expect(ff890Op20231PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ff890-op-2023-1",
        "recurrencePolicy": undefined,
        "sku": "ff890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3300000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
