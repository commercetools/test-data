import type { TStandalonePriceDraft } from '../../../types';
import ff890Op20236 from './ff-890-op-2023-6';

describe(`with ff890Op20236 preset`, () => {
  it(`should return a ff890Op20236 preset`, () => {
    const ff890Op20236Preset = ff890Op20236().build<TStandalonePriceDraft>();
    expect(ff890Op20236Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ff890-op-2023-6",
        "sku": "ff890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2000000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ff890Op20236 preset when built for graphql`, () => {
    const ff890Op20236PresetGraphql =
      ff890Op20236().buildGraphql<TStandalonePriceDraft>();
    expect(ff890Op20236PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ff890-op-2023-6",
        "sku": "ff890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2000000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
