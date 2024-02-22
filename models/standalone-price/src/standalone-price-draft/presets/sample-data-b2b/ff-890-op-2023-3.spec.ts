import type { TStandalonePriceDraft } from '../../../types';
import ff890Op20233 from './ff-890-op-2023-3';

describe(`with ff890Op20233 preset`, () => {
  it(`should return a ff890Op20233 preset`, () => {
    const ff890Op20233Preset = ff890Op20233().build<TStandalonePriceDraft>();
    expect(ff890Op20233Preset).toMatchInlineSnapshot(`
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
        "key": "ff890-op-2023-3",
        "sku": "ff890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3850000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a ff890Op20233 preset when built for graphql`, () => {
    const ff890Op20233PresetGraphql =
      ff890Op20233().buildGraphql<TStandalonePriceDraft>();
    expect(ff890Op20233PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "ff890-op-2023-3",
        "sku": "ff890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3850000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
