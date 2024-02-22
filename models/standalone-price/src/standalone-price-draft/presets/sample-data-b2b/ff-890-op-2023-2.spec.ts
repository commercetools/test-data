import type { TStandalonePriceDraft } from '../../../types';
import ff890Op20232 from './ff-890-op-2023-2';

describe(`with ff890Op20232 preset`, () => {
  it(`should return a ff890Op20232 preset`, () => {
    const ff890Op20232Preset = ff890Op20232().build<TStandalonePriceDraft>();
    expect(ff890Op20232Preset).toMatchInlineSnapshot(`
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
        "key": "ff890-op-2023-2",
        "sku": "ff890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3025000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ff890Op20232 preset when built for graphql`, () => {
    const ff890Op20232PresetGraphql =
      ff890Op20232().buildGraphql<TStandalonePriceDraft>();
    expect(ff890Op20232PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "ff890-op-2023-2",
        "sku": "ff890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3025000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
